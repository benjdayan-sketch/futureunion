import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, CheckCircle, Award, Download, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const acesPillars = [
    {
        letter: "A",
        name: "Alliance",
        short: "Capital unambiguously allied in provenance, structure, and strategic alignment.",
        long: "Does this capital originate from, and deploy toward, verified allied partners within the rules-based order? Alliance ensures the capital advancing allied security is itself unambiguously allied — in provenance, structure, and strategic alignment. Capital that cannot meet this standard has no place in the Allied Capital framework regardless of where it is deployed."
    },
    {
        letter: "C",
        name: "Criticality",
        short: "Capital addressing genuinely consequential security needs — not merely defense-adjacent activity.",
        long: "Does this capital address a genuinely consequential security need — one whose absence materially weakens allied deterrence, industrial capacity, or strategic position? Criticality distinguishes mission-essential investment from adjacent commercial activity. Not all defense-adjacent capital qualifies. Only that which addresses security challenges that actually matter."
    },
    {
        letter: "E",
        name: "Economics",
        short: "Capital advancing allied economic sovereignty and countering adversarial market disruption.",
        long: "Does this capital advance the economic sovereignty of allied nations — reducing adversarial supply chain dependency, closing strategic chokepoints, and countering capital flows designed to distort and displace Western markets? The most consequential battleground of this competition is financial and structural, not merely military."
    },
    {
        letter: "S",
        name: "Sovereignty",
        short: "Capital building the self-sufficient allied industrial base no adversarial leverage point can compromise.",
        long: "Does this capital strengthen the capacity of allied nations to independently develop, produce, and sustain the capabilities their security requires — without dependency on adversarial inputs, technology, or capital? Sovereignty-qualified investment builds the self-sufficient allied industrial base that no adversarial leverage point can compromise."
    },
];

const AlliedCapital = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Allied Capital"
                description="A New Standard for a New Era. Capital Has Always Had Consequences. Now It Has a Standard. Governed by the A.C.E.S. Framework."
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-subtle relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <span className="text-gold font-semibold uppercase tracking-widest text-sm">
                        <EditableText name="alliedcap.hero.label" defaultContent="Capital Continuum" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="alliedcap.hero.title" defaultContent="Allied Capital" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="alliedcap.hero.subtitle" defaultContent="A New Standard for a New Era." />
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        <EditableText name="alliedcap.hero.framework" defaultContent="Governed by the A.C.E.S. Framework — Alliance · Criticality · Economics · Sovereignty" />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="alliedcap.hero.description" multiline defaultContent="Capital Has Always Had Consequences. Now It Has a Standard." />
                    </p>
                </div>
            </section>

            {/* Opening */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="alliedcap.opening.p1" multiline defaultContent="The rules-based order underwriting global commerce is neither self-evident nor self-perpetuating — and capital markets are beginning to price that reality. Adversarial powers are deploying economic doctrine, weaponizing capital flows, and systematically targeting the industrial and technological foundations of allied superiority." />
                            </p>
                            <p>
                                <EditableText name="alliedcap.opening.p2" multiline defaultContent="Allied Capital is Future Union's response: the deliberate deployment of private investment in active service of allied security and democratic resilience — capital that does not merely avoid adversarial exposure but advances the foundations on which allied superiority depends." />
                            </p>
                            <p className="text-foreground font-semibold italic">
                                <EditableText name="alliedcap.opening.p3" defaultContent="Democracy can no longer simply provide the conditions for capitalism to flourish. Capitalism must become an instrument of democracy's defense." />
                            </p>
                        </div>

                        {/* What Is Allied Capital */}
                        <div className="flex items-center gap-4 mb-8">
                            <Shield className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="alliedcap.what.title" defaultContent="What Is Allied Capital?" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="alliedcap.what.p1" multiline defaultContent="Allied Capital is Future Union's designated investment domain — directing capital toward the assets, technologies, and companies most critical to U.S. and allied security leadership." />
                            </p>
                            <p>
                                <EditableText name="alliedcap.what.p2" multiline defaultContent="It was built on the explicit lessons of ESG's failure. Where ESG faltered — fragmented methodologies, contradictory assessments, and the fatal substitution of disclosure for verification — Allied Capital takes a structurally different approach. The difference is not intent. It is architecture: verified deployment rather than disclosed intention, with governance and enforcement mechanisms built in from inception rather than retrofitted after adoption revealed their absence." />
                            </p>
                            <p>
                                <EditableText name="alliedcap.what.p3" defaultContent="The question is not what a fund intends to support. It is what the capital is actually doing." />
                            </p>
                        </div>

                        {/* A.C.E.S. Framework - Summary */}
                        <div className="flex items-center gap-4 mb-8">
                            <Layers className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="alliedcap.aces.title" defaultContent="The A.C.E.S. Framework" />
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="alliedcap.aces.intro" defaultContent="All Allied Capital deployment is assessed against four non-negotiable pillars:" />
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {acesPillars.map((pillar) => (
                                <div key={pillar.letter} className="bg-card border border-border p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-gold font-display text-3xl">{pillar.letter}</span>
                                        <h3 className="font-semibold text-foreground text-lg">{pillar.name}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{pillar.short}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gold italic text-sm mb-12">
                            <EditableText name="alliedcap.aces.note" defaultContent="Deployment advancing all four pillars simultaneously represents the highest-value Allied Capital allocation." />
                        </p>

                        {/* The Standard */}
                        <div className="flex items-center gap-4 mb-8">
                            <CheckCircle className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="alliedcap.standard.title" defaultContent="The Standard Behind the Standard" />
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="alliedcap.standard.intro" defaultContent="Allied Capital addresses the institutional investor community's legitimate skepticism with mechanism, not merely assertion." />
                        </p>
                        <div className="space-y-4 mb-12">
                            {[
                                { title: "Verified", desc: "Independent third-party assessment against published A.C.E.S. criteria. No self-attestation. No disclosure theater." },
                                { title: "Enforced", desc: "Designations can be revoked. Misrepresentation results in immediate removal from the Allied Capital registry and public notification. The standard means nothing without enforcement." },
                                { title: "Governed", desc: "An independent methodology board reviews and updates qualification criteria annually on a published schedule." },
                                { title: "Fiduciarily Grounded", desc: "Defense and allied security sectors have demonstrated counter-cyclical resilience, government-backstopped demand, and long-duration contract structures consistent with institutional return mandates." },
                                { title: "Transparent", desc: "Methodology documentation, threshold criteria, and qualification decisions are published openly. A standard that cannot be interrogated is not a standard at all." },
                            ].map((item) => (
                                <div key={item.title} className="bg-card border border-border p-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recognition Tiers */}
                        <div className="flex items-center gap-4 mb-8">
                            <Award className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="alliedcap.tiers.title" defaultContent="The A.C.E.S. Recognition Tiers" />
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="alliedcap.tiers.intro" defaultContent="A verified credential earned through demonstrated deployment — not a ranking of peers, not a self-conferred designation." />
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-display text-xl text-gold mb-2">Allied Tier</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="alliedcap.tier.allied" multiline defaultContent="Verified deployment across at least one A.C.E.S. pillar. Public registry inclusion as an A.C.E.S.-aligned allocator." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-display text-xl text-gold mb-2">Gold Tier</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="alliedcap.tier.gold" multiline defaultContent="Verified deployment across a minimum of two pillars at published scale thresholds. Eligible for A.C.E.S. Index recognition and enhanced LP disclosure documentation." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-display text-xl text-gold mb-2">Platinum Tier</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="alliedcap.tier.platinum" multiline defaultContent="Sustained, verified deployment across all four pillars at published Platinum thresholds. The highest Allied Capital designation." />
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm italic mb-12">
                            All designations independently verified, publicly listed, and subject to periodic review. Earned through deployment. Maintained through continued compliance.
                        </p>

                        {/* Investment Categories */}
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
                            <EditableText name="alliedcap.categories.title" defaultContent="Your Investment Category" />
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="alliedcap.categories.intro" defaultContent="Allied Capital applies across capital structures. Select your focus to determine A.C.E.S. qualification criteria and recognition tier pathway:" />
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-12">
                            <Link to="/contact" className="bg-card border border-border p-6 text-center hover:border-gold transition-colors">
                                <span className="font-semibold text-foreground">Public Equity Investors</span>
                            </Link>
                            <Link to="/contact" className="bg-card border border-border p-6 text-center hover:border-gold transition-colors">
                                <span className="font-semibold text-foreground">Private Equity Investors</span>
                            </Link>
                            <Link to="/contact" className="bg-card border border-border p-6 text-center hover:border-gold transition-colors">
                                <span className="font-semibold text-foreground">Private Credit Investors</span>
                            </Link>
                        </div>

                        {/* Closing */}
                        <div className="bg-card border border-gold/30 p-8 mb-8">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <EditableText name="alliedcap.closing" multiline defaultContent="The gap between the capital available in allied markets and the capital deployed in defense of those markets is one of the most consequential misallocations of this era. Allied Capital exists to close it." />
                            </p>
                            <p className="text-muted-foreground text-sm italic">
                                For investors seeking to verify the provenance and allied alignment of their capital, Future Union's Clean Capital Certification operates as a complementary but independent standard.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors text-center">
                                Apply for A.C.E.S. Recognition
                            </Link>
                            <Link to="/clean-capital" className="px-8 py-3 border border-gold text-gold font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors text-center">
                                Learn About Clean Capital
                            </Link>
                        </div>

                        {/* Full A.C.E.S. Framework Detail */}
                        <div className="mt-16 pt-16 border-t border-border">
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
                                <EditableText name="alliedcap.fullaces.title" defaultContent="The A.C.E.S. Framework — In Detail" />
                            </h2>
                            <div className="space-y-8">
                                {acesPillars.map((pillar) => (
                                    <div key={pillar.letter} className="p-8 bg-gradient-subtle border border-border">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-gold font-display text-4xl">{pillar.letter}</span>
                                            <h3 className="font-display text-2xl text-foreground">{pillar.name}</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{pillar.long}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gold italic">
                                <EditableText name="alliedcap.fullaces.closing" defaultContent="Allied Capital advancing all four pillars simultaneously represents the highest-value deployment within the framework — and the most consequential contribution to allied security leadership." />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default AlliedCapital;
