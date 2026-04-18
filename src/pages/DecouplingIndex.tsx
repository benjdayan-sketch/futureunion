import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, BarChart3, Download, TrendingUp, TrendingDown, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const DecouplingIndex = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Decoupling & Separation Index"
                description="Economic Counter-Intelligence. The Scorecard for Economic Sovereignty. Now in its third annual edition, auditing the full S&P 500."
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
                        <EditableText name="decoupling.hero.label" defaultContent="Economic Counter-Intelligence" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="decoupling.hero.title" defaultContent="The Decoupling & Separation Index" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="decoupling.hero.subtitle" defaultContent="The Scorecard for Economic Sovereignty." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="decoupling.hero.description" multiline defaultContent="Economic entanglement with adversarial nations is not a commercial inconvenience. It is a strategic vulnerability — one that Russia and China have demonstrated, repeatedly and deliberately, they will exploit. Decoupling is the minimum requirement for economic sovereignty." />
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        {/* The Index */}
                        <div className="flex items-center gap-4 mb-8">
                            <BarChart3 className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="decoupling.index.title" defaultContent="The Index" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="decoupling.index.p1" multiline defaultContent="Now in its third annual edition, the Index audits the full S&P 500 — grading each company on the extent to which it has reduced the leverage Russia and China exploit to exert strategic influence over Western commercial and technological operations. Grades are standardized for business model differences across sectors, ensuring they reflect genuine strategic exposure rather than superficial commercial relationships." />
                            </p>
                            <p>
                                <EditableText name="decoupling.index.p2" multiline defaultContent="The result is a data-driven, sector-by-sector accounting of where American corporate leadership stands — and where it has failed to act." />
                            </p>
                        </div>

                        {/* Key Finding */}
                        <div className="bg-card border border-gold/30 p-8 mb-12">
                            <h3 className="font-display text-2xl text-foreground mb-4">
                                <EditableText name="decoupling.finding.title" defaultContent="The Findings" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="decoupling.finding.text" multiline defaultContent="The headline finding is unambiguous: sectors including Information Technology remain dangerously enmeshed with adversarial nations. This is not marginal exposure. It is a systemic vulnerability in the allied economic security posture — one that persists not from necessity but from inertia and the absence of sufficient institutional pressure to act." />
                            </p>
                        </div>

                        {/* Leaders & Laggards */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-card border border-green-500/30 p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingUp className="w-8 h-8 text-green-500" />
                                    <h3 className="font-display text-2xl text-foreground">
                                        <EditableText name="decoupling.leaders.title" defaultContent="The Leaders" />
                                    </h3>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    <EditableText name="decoupling.leaders.desc" multiline defaultContent="Companies that have taken decisive, verifiable action to reduce adversarial entanglement — demonstrating that economic sovereignty is an achievable operational reality, not merely a policy aspiration." />
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-foreground">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <EditableText name="decoupling.leaders.1" defaultContent="Verizon" />
                                    </li>
                                    <li className="flex items-center gap-2 text-foreground">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <EditableText name="decoupling.leaders.2" defaultContent="Cardinal Health" />
                                    </li>
                                </ul>
                                <p className="text-muted-foreground text-sm mt-3 italic">The complete leaders list is in the full report.</p>
                            </div>
                            <div className="bg-card border border-red-500/30 p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-500" />
                                    <h3 className="font-display text-2xl text-foreground">
                                        <EditableText name="decoupling.laggards.title" defaultContent="The Laggards" />
                                    </h3>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    <EditableText name="decoupling.laggards.desc" multiline defaultContent="Not every company has acted. The Index identifies those that have not — grading the companies whose continued entanglement represents the most consequential unaddressed vulnerabilities in the S&P 500." />
                                </p>
                                <p className="text-red-400 font-semibold">
                                    <EditableText name="decoupling.laggards.note" defaultContent="See who scored an F. Download the full report." />
                                </p>
                            </div>
                        </div>

                        {/* Methodology */}
                        <div className="flex items-center gap-4 mb-8">
                            <Shield className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="decoupling.methodology.title" defaultContent="The Methodology" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="decoupling.methodology.p1" multiline defaultContent="The Index measures verifiable corporate action — not stated commitments or press release language. Revenue exposure, supply chain dependency, board composition, joint venture structures, and technology transfer relationships with adversarially directed entities are the basis for every grade. Rubrics are standardized across sector-specific business models to ensure comparability and fairness." />
                            </p>
                            <p className="text-foreground font-semibold">
                                <EditableText name="decoupling.methodology.p2" defaultContent="Public grades on named companies demand a methodology that withstands scrutiny. Ours does." />
                            </p>
                        </div>

                        {/* Closing */}
                        <div className="bg-gradient-subtle border border-border p-8 mb-8">
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="decoupling.closing" multiline defaultContent="The companies of the free world did not build their adversarial entanglements overnight. But the first requirement of meaningful progress is an honest accounting of where things stand — company by company, sector by sector, grade by grade. The question now is what the companies that scored poorly intend to do about it." />
                            </p>
                        </div>

                        {/* Download Section */}
                        <div className="bg-card border border-border p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <Download className="w-8 h-8 text-gold" />
                                <h3 className="font-display text-2xl text-foreground">
                                    <EditableText name="decoupling.download.title" defaultContent="Download the Full Index" />
                                </h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                <EditableText name="decoupling.download.desc" multiline defaultContent="Enter your institutional email to receive the full report." />
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your institutional email"
                                    className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                                />
                                <button className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors">
                                    Download Index
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default DecouplingIndex;
