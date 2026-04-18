import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Globe, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const GlobalDefenseChampionsLeague2025 = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Global Defense Champions League 2025"
                description="The Shield Must Be Shared. The Global Defense Champions League ranks the companies solving consequential national security challenges across the full breadth of global allied defense."
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
                        <EditableText name="gdcl2025.hero.label" defaultContent="The Builders" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="gdcl2025.hero.title" defaultContent="The Global Defense Champions League" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="gdcl2025.hero.subtitle" defaultContent="The Shield Must Be Shared." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="gdcl2025.hero.description" multiline defaultContent="The free world does not prevail on American strength alone. It prevails on allied strength — coordinated, sovereign, and collectively superior. The Global Defense Champions League was built on that premise." />
                    </p>
                </div>
            </section>

            {/* Opening Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="gdcl2025.opening.p1" multiline defaultContent="We stripped away fundraising metrics, valuation narratives, and the entrenched U.S.-centric frameworks that have long distorted how the defense industrial base is evaluated. What remains is a single, uncompromising standard: the demonstrated ability to solve consequential national security challenges across the full breadth of the global allied defense." />
                            </p>
                        </div>

                        {/* Beyond American Primes */}
                        <div className="flex items-center gap-4 mb-8">
                            <Globe className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="gdcl2025.beyond.title" defaultContent="Beyond American Primes" />
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="gdcl2025.beyond.p1" multiline defaultContent="Prevailing rankings have measured the American defense ecosystem in isolation — centering government primes and domestic emerging defenders while the critical contributions of allied nations, beyond the most prominent, went unrecognized and undercapitalized." />
                            </p>
                            <p>
                                <EditableText name="gdcl2025.beyond.p2" multiline defaultContent="The Global Defense Champions League is built to correct that. Now in its second year, we expand on the inaugural World Defense 300 with a refined structure: the All-World Defense 300, assessing the full breadth of the global allied industrial base, and the Allied Security 100, identifying the emerging companies positioned to break through and define the next generation of allied capability." />
                            </p>
                            <p>
                                <EditableText name="gdcl2025.beyond.p3" multiline defaultContent="With nearly one-third of the ranking international, this remains the only evaluation that looks beyond American primes to identify the companies — from Paris to Abu Dhabi — building the sovereign capabilities modern global deterrence demands. These are not peripheral contributors. They are foundational to the alliance's ability to prevail." />
                            </p>
                            <p>
                                <EditableText name="gdcl2025.beyond.p4" multiline defaultContent="Future Union exists to ensure that global capital and the global industrial base are aligned accordingly — both independently and collectively." />
                            </p>
                        </div>

                        {/* Methodology */}
                        <div className="flex items-center gap-4 mb-8">
                            <Target className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="gdcl2025.methodology.title" defaultContent="The Methodology" />
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="gdcl2025.methodology.p1" multiline defaultContent="Our evaluation is outcome-driven by design. We do not assess technology roadmaps, venture funding totals, or market valuations. We assess solutions — delivered, verified, and consequential. The question is not what a company has raised. It is what a company has solved." />
                            </p>
                            <p>
                                <EditableText name="gdcl2025.methodology.p2" multiline defaultContent="Scoring further accounts for breakthrough potential, recognizing nascent technologies with the capacity for decisive, disruptive impact on the trajectory of allied defense." />
                            </p>
                        </div>

                        {/* Stats Block */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-card border border-border p-6 text-center">
                                <div className="text-3xl font-display text-gold mb-2">300</div>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="gdcl2025.stat1" defaultContent="Companies Ranked — Plus the Allied Security 100 poised for the Arena." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6 text-center">
                                <div className="text-3xl font-display text-gold mb-2">Global Reach</div>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="gdcl2025.stat2" defaultContent="From Paris to Seoul. Helsinki to Abu Dhabi." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6 text-center">
                                <div className="text-3xl font-display text-gold mb-2">One Metric</div>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="gdcl2025.stat3" defaultContent="Solutions Delivered. Not Capital Raised." />
                                </p>
                            </div>
                        </div>

                        {/* Celebrating Sovereign Defense */}
                        <div className="bg-card border border-gold/30 p-8 mb-12">
                            <h3 className="font-display text-2xl text-foreground mb-4">
                                <EditableText name="gdcl2025.sovereign.title" defaultContent="Celebrating Sovereign Defense Tech" />
                            </h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    <EditableText name="gdcl2025.sovereign.p1" multiline defaultContent="The rise of sovereign defense technology across allied nations is not a challenge to American strength. It is the alliance's most potent strategic advantage. The Global Defense Champions League shines a light on the companies advancing that cause — and makes the case that recognizing them is not a concession to multilateralism. It is a strategic imperative." />
                                </p>
                                <p className="text-gold font-semibold italic">
                                    <EditableText name="gdcl2025.sovereign.tagline" defaultContent="The alliance that builds together prevails together." />
                                </p>
                            </div>
                        </div>

                        {/* Allied Matrix */}
                        <div className="flex items-center gap-4 mb-8">
                            <Award className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="gdcl2025.matrix.title" defaultContent="The 2025 Allied Matrix" />
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                            <p>
                                <EditableText name="gdcl2025.matrix.p1" multiline defaultContent="The complete All-World Defense 300 and Allied Security 100 — with detailed analysis of each company's national security contributions, capability assessments, and strategic positioning across the allied defense industrial base." />
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors text-center">
                                Access the Allied Matrix
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

export default GlobalDefenseChampionsLeague2025;
