import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Trophy, Download, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";

const IntrepidInvestors = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Intrepid List 2025"
                description="Recognizing investors driving innovation in national security. The Intrepid List honors the financiers who have dedicated the time, capital, and resources committing to founders building for security."
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
                        Capital Continuum
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        Intrepid List 2025
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        "Defending Democracy through Dedicated Capital."
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        Three years of tracking the principled investors supporting and securing democracy,
                        and now the massive 2025 edition. Now including private equity, this is the ledger
                        of the funds deploying billions into in defense of democracy.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <Trophy className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                The Unified Collective of Democratic Security
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                The Intrepid List honors the financiers who have dedicated the time, capital,
                                and resources committing to founders building for security. Together with the
                                Global Defense 300, they form the unified collective of democratic security.
                            </p>
                            <p>
                                This list is more than just tracking the ecosystem; it helped build it—serving
                                as the architectural basis for the Department of War's AFWERX venture matching strategy.
                            </p>
                        </div>

                        {/* Clean Capital Badge */}
                        <div className="bg-card border border-gold/30 p-8 mb-12">
                            <div className="flex items-center gap-4 mb-4">
                                <Shield className="w-8 h-8 text-gold" />
                                <h3 className="font-display text-2xl text-foreground">Clean Capital Certified</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Through our Clean Capital Certification, we ensure this engine is fueled by allies, not adversaries.
                                Every investor on the Intrepid List has been verified to meet our rigorous standards for
                                capital source integrity.
                            </p>
                        </div>

                        {/* Download Section */}
                        <div className="bg-card border border-border p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <Download className="w-8 h-8 text-gold" />
                                <h3 className="font-display text-2xl text-foreground">Download the Full Report</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                The complete investor list, methodology, and rankings are available for download.
                                Enter your email to receive the full report.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                                />
                                <button className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors">
                                    Download Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Criteria Section */}
            <section className="py-16 bg-gradient-subtle">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
                            What Makes an Intrepid Investor
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle className="w-5 h-5 text-gold" />
                                    <h3 className="font-semibold text-foreground">Principled Investment</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Demonstrated commitment to investing in sectors that strengthen democratic
                                    infrastructure and national security capabilities.
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle className="w-5 h-5 text-gold" />
                                    <h3 className="font-semibold text-foreground">Clean Capital Standards</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Verification that capital sources do not include adversarial nations or
                                    entities that undermine democratic values.
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle className="w-5 h-5 text-gold" />
                                    <h3 className="font-semibold text-foreground">Founder Support</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Dedicated time and resources to founders building technologies for
                                    security and democratic resilience.
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle className="w-5 h-5 text-gold" />
                                    <h3 className="font-semibold text-foreground">Ecosystem Leadership</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Active advocacy and leadership in promoting democratic investment
                                    principles within the broader investment community.
                                </p>
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

export default IntrepidInvestors;
