import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Target, Layers, Award, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const verticals = [
    "Space",
    "Strike & Energetics",
    "Autonomous Systems",
    "Intelligence, AI & Electronic Warfare",
    "Cybersecurity",
    "Quantum, Compute & PNT",
    "Advanced Manufacturing & Robotics",
    "Strategic Resources",
];

const WorldDefense300 = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="World Defense 300 (2024)"
                description="An Audit of the Arsenal of Democracy. The inaugural global ranking built on outcomes over origins, solutions over speculation."
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
                        <EditableText name="wd300.hero.label" defaultContent="The Builders" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="wd300.hero.title" defaultContent="The World Defense 300" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="wd300.hero.subtitle" defaultContent="An Audit of the Arsenal of Democracy." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="wd300.hero.description" multiline defaultContent="The prevailing frameworks for evaluating the defense industrial base were not built to answer the question that matters most: who is actually solving the problem?" />
                    </p>
                </div>
            </section>

            {/* Opening */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="wd300.opening.p1" multiline defaultContent="Existing rankings measure fundraising velocity, valuation milestones, and venture momentum — metrics that reflect capital market dynamics, not national security capability. We rejected that framework entirely. The World Defense 300 was built on a single, uncompromising mandate: outcomes over origins. Solutions over speculation." />
                            </p>
                            <p>
                                <EditableText name="wd300.opening.p2" multiline defaultContent="This is the inaugural global ranking of its kind — and it was designed from the ground up to reflect the true architecture of allied defense." />
                            </p>
                        </div>

                        {/* The Imperative */}
                        <div className="flex items-center gap-4 mb-8">
                            <Target className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="wd300.imperative.title" defaultContent="The Imperative" />
                            </h2>
                        </div>
                        <p className="text-gold font-semibold text-lg mb-4">
                            <EditableText name="wd300.imperative.subtitle" defaultContent="A Race Against Time." />
                        </p>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="wd300.imperative.p1" multiline defaultContent="The Alliance is operating on a timeline that is no longer entirely its own. Supply chains are being re-shored. Industrial sovereignty is being rebuilt. The urgency is real — and the tools used to assess the industrial base must be equal to that urgency." />
                            </p>
                            <p>
                                <EditableText name="wd300.imperative.p2" multiline defaultContent="Conventional rankings are not audits of power. They are leaderboards of fundraising. This conflation — what we term Venture Myopia — is a systemic failure that substitutes financial speculation for genuine capability assessment. The consequences of that failure are not abstract. They are strategic." />
                            </p>
                        </div>

                        {/* The Invisible Middle */}
                        <div className="flex items-center gap-4 mb-8">
                            <Layers className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="wd300.invisible.title" defaultContent="The Invisible Middle" />
                            </h2>
                        </div>
                        <p className="text-gold font-semibold text-lg mb-4">
                            <EditableText name="wd300.invisible.subtitle" defaultContent="Beyond the Primes. Beyond the Hype." />
                        </p>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="wd300.invisible.p1" multiline defaultContent="The most consequential contributors to allied defense are frequently the least visible. The World Defense 300 was built to find them." />
                            </p>
                            <p>
                                <EditableText name="wd300.invisible.p2" multiline defaultContent="We looked past the venture-driven hype narratives to identify what we call the Invisible Middle — the overlooked manufacturers, the unheralded Shadow Primes, and the unglamorous but indispensable suppliers whose work underpins allied interoperability at every level. From solid rocket motors to precision-machined components, these are the companies that hold the line when it matters most. They deserve to be seen." />
                            </p>
                        </div>

                        {/* The Methodology */}
                        <div className="flex items-center gap-4 mb-8">
                            <BarChart3 className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="wd300.methodology.title" defaultContent="The Methodology" />
                            </h2>
                        </div>
                        <p className="text-gold font-semibold text-lg mb-4">
                            <EditableText name="wd300.methodology.subtitle" defaultContent="Five Systemic Corrections." />
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="wd300.methodology.intro" multiline defaultContent="The World Defense 300 was constructed to address five structural failures embedded in conventional defense company rankings:" />
                        </p>
                        <div className="space-y-4 mb-12">
                            {[
                                { num: "1", title: "The Deployment Gap", desc: "We prioritize solutions proven in contested operational environments over R&D prototypes with no deployment record." },
                                { num: "2", title: "The Fulcrum Blindspot", desc: "We identify the Shadow Primes: the unglamorous manufacturers whose components preserve system integrity and allied interoperability across the industrial base." },
                                { num: "3", title: "The Sustainment Void", desc: "Logistics are life. We elevate the maintenance, repair, and overhaul technologies that account for up to 70% of platform lifecycle costs — and are systematically underrepresented in conventional rankings." },
                                { num: "4", title: "Allied Unity", desc: "As the first genuinely global ranking, we audit the full allied industrial base across borders — not merely its American component." },
                                { num: "5", title: "Asymmetric Leverage", desc: "We champion the solutions that are cheaper to deploy than to destroy: the force multipliers that shift the calculus of deterrence." },
                            ].map((item) => (
                                <div key={item.num} className="bg-card border border-border p-6">
                                    <div className="flex items-start gap-4">
                                        <span className="text-gold font-display text-2xl">{item.num}</span>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* The Verticals */}
                        <div className="flex items-center gap-4 mb-8">
                            <Shield className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="wd300.verticals.title" defaultContent="Eight Mission-Focused Domains" />
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="wd300.verticals.intro" multiline defaultContent="We abandoned generic technology categories in favor of outcome-based evaluation domains — each defined by the security challenge it addresses, not the technology it employs." />
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {verticals.map((v) => (
                                <div key={v} className="bg-gradient-subtle border border-border p-4 text-center">
                                    <span className="text-foreground font-semibold text-sm">{v}</span>
                                </div>
                            ))}
                        </div>

                        {/* Company Classifications */}
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
                            <EditableText name="wd300.classifications.title" defaultContent="Company Classifications" />
                        </h2>
                        <div className="space-y-4 mb-12">
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-display text-xl text-gold mb-2">Spark</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="wd300.class.spark" multiline defaultContent="Early-stage innovators demonstrating robust, proven capabilities that, while not yet deployed at scale, are building the foundational solutions on which the next generation of allied superiority will depend." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-display text-xl text-gold mb-2">Forge</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="wd300.class.forge" multiline defaultContent="Companies with proven, maturing capabilities poised to become decisive allied contributors. As their solutions scale and proliferate, they represent the most credible challengers to Arsenal-tier standing." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-display text-xl text-gold mb-2">Arsenal</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="wd300.class.arsenal" multiline defaultContent="The tier of highest consequence. Arsenal companies fulfill the most urgent problem sets the shield demands — and include companies whose disruptive potential is so strategically significant that their scoring warrants top-tier designation regardless of immediate operational availability." />
                                </p>
                            </div>
                        </div>

                        {/* Closing */}
                        <div className="bg-card border border-gold/30 p-8">
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="wd300.closing" multiline defaultContent="These 300 companies are sovereign assets — standing between allied rhetoric and allied readiness. The World Defense 300 exists to ensure the world can see them clearly, and that capital follows accordingly." />
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

export default WorldDefense300;
