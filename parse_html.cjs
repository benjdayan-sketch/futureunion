const fs = require('fs');

const html = fs.readFileSync('300-2025-list.html', 'utf8');

const verticals = [];
const icons = [
    "<Rocket className=\"w-6 h-6\" />",
    "<Crosshair className=\"w-6 h-6\" />",
    "<Bot className=\"w-6 h-6\" />",
    "<Brain className=\"w-6 h-6\" />",
    "<Lock className=\"w-6 h-6\" />",
    "<Cpu className=\"w-6 h-6\" />",
    "<Cog className=\"w-6 h-6\" />",
    "<Leaf className=\"w-6 h-6\" />",
];

const ids = [
    "space",
    "strike",
    "autonomous",
    "intelligence",
    "cyber",
    "quantum",
    "manufacturing",
    "resources",
];

const parseTable = (tableHtml, isArsenal) => {
    const rowRegex = /<tr[^>]*><td[^>]*>(.*?)<\/td><td[^>]*>(.*?)<\/td><td[^>]*>(.*?)<\/td><td[^>]*>(.*?)<\/td><td[^>]*>(.*?)<\/td><\/tr>/gi;
    const companies = [];
    let rowMatch;
    while ((rowMatch = rowRegex.exec(tableHtml)) !== null) {
        // Match 1: rank, 2: company, 3: region, 4: score, 5: context
        let rankText = rowMatch[1].replace(/<[^>]+>/g, '').trim();
        if (rankText === 'Rank') continue; // header
        let rank = parseInt(rankText, 10);
        if (isNaN(rank)) continue;

        let name = rowMatch[2].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
        let region = rowMatch[3].replace(/<[^>]+>/g, '').trim();
        let score = parseFloat(rowMatch[4].replace(/<[^>]+>/g, '').trim());
        let context = rowMatch[5].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/"/g, '\\"').trim();

        // Check for next unicorn (usually marked as text or logo? For now we'll just parse what's there)
        // Actually the user mentioned adding a checkbox for "Next Unicorn" in another file, but the HTML doesn't explicitly mark them unless it's in the name like "*".
        // I will detect if an asterisk is at the end of the name or something similar, or just leave isNextUnicorn out since the HTML may not have it.
        let isNextUnicorn = name.includes('*') || name.toLowerCase().includes('unicorn');
        if (name.endsWith('*')) name = name.slice(0, -1).trim();

        const companyData = {
            rank,
            name,
            region,
            score,
            context,
            ...(isArsenal ? { isArsenal: true } : {}),
            ...(isNextUnicorn ? { isNextUnicorn: true } : {})
        };
        companies.push(companyData);
    }
    return companies;
};

// Split by headers
const parts = html.split(/<h2 class="v-header">/);
let currentVerticalIdx = 0;

for (let i = 1; i < parts.length; i++) {
    const sectionHtml = parts[i];
    const titleEndIdx = sectionHtml.indexOf('</h2>');
    const titleRaw = sectionHtml.slice(0, titleEndIdx);
    const contentHtml = sectionHtml.slice(titleEndIdx + 5);

    const titleParts = titleRaw.match(/^(\d+)\)\s*(.*?):\s*(.*)$/);
    if (!titleParts) continue;

    const idxStr = titleParts[1].padStart(2, '0');
    let mainTitle = titleParts[2].trim();
    let subtitle = titleParts[3].trim();

    if (subtitle.endsWith('.')) {
        // subtitle = subtitle.slice(0, -1);
    }

    let mainTitleBase = mainTitle;
    if (mainTitle.includes('(')) {
        mainTitleBase = mainTitle.split('(')[0].trim();
    }
    const formattedTitle = `${idxStr} ${mainTitleBase.toUpperCase()}`;

    // split into SPARK, FORGE, ARSENAL blocks
    // For each block, find the table after it.

    const getTableHtml = (stageLabel) => {
        const stageIdx = contentHtml.indexOf(`>${stageLabel}<`);
        if (stageIdx === -1) return '';
        const tableStart = contentHtml.indexOf('<table', stageIdx);
        if (tableStart === -1) return '';
        const tableEnd = contentHtml.indexOf('</table>', tableStart);
        return contentHtml.slice(tableStart, tableEnd + 8);
    };

    const sparkHtml = getTableHtml('SPARK');
    const forgeHtml = getTableHtml('FORGE');
    const arsenalHtml = getTableHtml('ARSENAL');

    verticals.push({
        id: ids[currentVerticalIdx],
        title: formattedTitle,
        subtitle: subtitle,
        iconRaw: icons[currentVerticalIdx],
        spark: parseTable(sparkHtml, false),
        forge: parseTable(forgeHtml, false),
        arsenal: parseTable(arsenalHtml, true)
    });

    currentVerticalIdx++;
}

let tsxLines = ['const verticals: VerticalData[] = ['];

for (const v of verticals) {
    tsxLines.push(`  {`);
    tsxLines.push(`    id: "${v.id}",`);
    tsxLines.push(`    title: "${v.title}",`);
    tsxLines.push(`    subtitle: "${v.subtitle}",`);
    tsxLines.push(`    icon: ${v.iconRaw},`);

    for (const stage of ['spark', 'forge', 'arsenal']) {
        tsxLines.push(`    ${stage}: [`);
        for (const c of v[stage]) {
            let extra = [];
            if (c.isArsenal) extra.push('isArsenal: true');
            if (c.isNextUnicorn) extra.push('isNextUnicorn: true');
            let extraStr = extra.length > 0 ? `, ${extra.join(', ')}` : '';
            tsxLines.push(`      { rank: ${c.rank}, name: "${c.name}", region: "${c.region}", score: ${c.score}, context: "${c.context}"${extraStr} },`);
        }
        tsxLines.push(`    ],`);
    }

    tsxLines.push(`  },`);
}
tsxLines.push(`];`);

fs.writeFileSync('generated_verticals.txt', tsxLines.join('\n'));
console.log('Done generating verticals.');
