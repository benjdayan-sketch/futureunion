import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Trophy, Download, Shield, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const IntrepidInvestors = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="The Intrepid List 2025"
                description="Defending Democracy Through Dedicated Capital. The definitive record of the funds, firms, and financiers deploying billions in defense of the rules-based order."
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
                        <EditableText name="intrepid.hero.label" defaultContent="The Funders" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="intrepid.hero.title" defaultContent="The Intrepid List" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="intrepid.hero.subtitle" defaultContent="Defending Democracy Through Dedicated Capital." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="intrepid.hero.description" multiline defaultContent="Capital is a strategic instrument. The investors on this list have understood that longer than most — and acted on it with conviction when others did not. The Intrepid List maps the private capital most aligned with allied security priorities — the investors at the forefront of Allied Capital deployment, recognized for their commitment before the broader market followed." />
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="intrepid.opening.p1" multiline defaultContent="Now in its third edition and expanded to include Private Equity, it is the definitive record of the funds, firms, and financiers deploying billions in defense of the rules-based order — not because governments directed them to, but because they recognized the stakes before the broader market did." />
                            </p>
                        </div>

                        {/* Unified Collective */}
                        <div className="flex items-center gap-4 mb-8">
                            <Trophy className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="intrepid.collective.title" defaultContent="The Unified Collective" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="intrepid.collective.p1" multiline defaultContent="Together with the Global Defense Champions League — Future Union's ranking of the world's most consequential defense innovators — the Intrepid List forms the unified collective of democratic security: the capital and the companies, mapped and recognized in concert. The builders need the funders. The funders need the builders. The Intrepid List ensures both sides of that equation are visible, credible, and connected." />
                            </p>
                        </div>

                        {/* Why This List Exists */}
                        <div className="flex items-center gap-4 mb-8">
                            <Users className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="intrepid.why.title" defaultContent="Why This List Exists" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="intrepid.why.p1" multiline defaultContent="For too long, the investors financing the defense of the free world operated without recognition, without a common framework, and without the visibility their commitment deserved." />
                            </p>
                            <p>
                                <EditableText name="intrepid.why.p2" multiline defaultContent="The Intrepid List was built to change that — and has done more than track the ecosystem. It served as the architectural basis for the Department of War's AFWERX venture matching strategy: the mechanism by which the U.S. military identifies and engages the private capital most aligned with national security priorities. Three years in, it has become the standard by which allied investment alignment is recognized across the defense and national security ecosystem." />
                            </p>
                        </div>

                        {/* 2025 Edition */}
                        <div className="bg-card border border-gold/30 p-8 mb-12">
                            <h3 className="font-display text-2xl text-foreground mb-4">
                                <EditableText name="intrepid.edition.title" defaultContent="The 2025 Edition" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="intrepid.edition.desc" multiline defaultContent="The most comprehensive edition to date — now including Private Equity for the first time, reflecting PE's growing role in scaling the allied defense industrial base alongside the venture capital community that built the ecosystem's foundation. The full edition covers the complete investor list, capital flow analysis across critical security verticals, and allied alignment assessment across the full scope of democratic security investment." />
                            </p>
                        </div>

                        {/* Note on Integrity */}
                        <div className="p-8 bg-gradient-subtle border border-border mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-6 h-6 text-gold" />
                                <h3 className="font-display text-xl text-foreground">
                                    <EditableText name="intrepid.integrity.title" defaultContent="A Note on Integrity" />
                                </h3>
                            </div>
                            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                                <p>
                                    <EditableText name="intrepid.integrity.p1" multiline defaultContent="The Intrepid List is a recognition of demonstrated investment activity — not a Clean Capital Certification. Inclusion reflects capital deployment in allied security assets. It does not independently verify the provenance or LP composition of every listed fund. Future Union does not conflate recognition with certification — the credibility of both depends on maintaining that distinction precisely." />
                                </p>
                                <p>
                                    Investors seeking independent capital verification are directed to our <Link to="/clean-capital" className="text-gold hover:text-gold/80 transition-colors">Clean Capital Certification program</Link>.
                                </p>
                            </div>
                        </div>

                        {/* Download Section */}
                        <div className="bg-card border border-border p-8 md:p-12 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <Download className="w-8 h-8 text-gold" />
                                <h3 className="font-display text-2xl text-foreground">
                                    <EditableText name="intrepid.download.title" defaultContent="Download the 2025 Intrepid List" />
                                </h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                <EditableText name="intrepid.download.description" multiline defaultContent="Enter your institutional email to receive the full report." />
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your institutional email"
                                    className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                                />
                                <button className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors">
                                    Download Report
                                </button>
                            </div>
                        </div>

                        {/* Closing */}
                        <div className="bg-card border border-gold/30 p-8 mb-8">
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="intrepid.closing" multiline defaultContent="The free world does not lack capital. It has lacked the clarity, coordination, and recognition required to direct that capital where it matters most. The Intrepid List exists to provide all three." />
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/global-defense-champions-league-2025" className="px-8 py-3 border border-gold text-gold font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors text-center">
                                Explore the Global Defense Champions League
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default IntrepidInvestors;
