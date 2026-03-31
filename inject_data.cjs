const fs = require('fs');

const tsxPath = 'src/pages/TopDefenseCompanies2025.tsx';
const tsxContent = fs.readFileSync(tsxPath, 'utf8');

const newVerticals = fs.readFileSync('generated_verticals.txt', 'utf8');

const startIndex = tsxContent.indexOf('const verticals: VerticalData[] = [');
if (startIndex !== -1) {
    const endPattern = '  },\n];\n';
    const endIndex = tsxContent.indexOf(endPattern, startIndex);
    if (endIndex !== -1) {
        const startStr = tsxContent.substring(0, startIndex);
        const endStr = tsxContent.substring(endIndex + endPattern.length);

        fs.writeFileSync(tsxPath, startStr + newVerticals + '\n' + endStr);
        console.log('TSX Content Updated successfully');
    } else {
        // try to find just '];'
        const match = tsxContent.substring(startIndex).match(/\];/);
        if (match) {
            const idx = startIndex + match.index + 2;
            fs.writeFileSync(tsxPath, tsxContent.substring(0, startIndex) + newVerticals + '\n' + tsxContent.substring(idx));
            console.log('TSX Content Updated successfully with regex end');
        } else {
            console.log('Could not find end index');
        }
    }
} else {
    console.log('Could not find start index');
}
