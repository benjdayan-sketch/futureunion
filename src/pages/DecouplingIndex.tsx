import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, BarChart3, Download, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";

const DecouplingIndex = () => {
    return (
        <main className="min-h-screen bg-background">
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
                        Threat Intelligence
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        Decoupling & Separation Index
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        The Separation Scorecard
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        Economic separation is a requirement to ensure democracy's geopolitical supremacy. 
                        In our 3rd annual report, we audited the S&P 500 to track the companies that have 
                        taken action, severing ties with Russia and China.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <BarChart3 className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                The Scorecard for Economic Sovereignty
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                It is the scorecard for economic sovereignty. We found that sectors like 
                                Information Technology remain dangerously enmeshed with adversarial nations.
                            </p>
                        </div>

                        {/* Leaders & Laggards */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-card border border-green-500/30 p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingUp className="w-8 h-8 text-green-500" />
                                    <h3 className="font-display text-2xl text-foreground">The Leaders</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    Companies that have taken decisive action to sever ties with adversarial nations.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-foreground">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Verizon
                                    </li>
                                    <li className="flex items-center gap-2 text-foreground">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Cardinal Health
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-card border border-red-500/30 p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-500" />
                                    <h3 className="font-display text-2xl text-foreground">The Laggards</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    Companies that remain dangerously enmeshed with Russia and China.
                                </p>
                                <p className="text-red-400 font-semibold">
                                    See who scored an F in the full report.
                                </p>
                            </div>
                        </div>

                        {/* Key Finding */}
                        <div className="bg-card border border-gold/30 p-8 mb-12">
                            <h3 className="font-display text-2xl text-foreground mb-4">
                                Key Finding
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Sectors like Information Technology remain dangerously enmeshed with adversarial 
                                nations. This represents a critical vulnerability in our economic security posture 
                                that must be addressed through deliberate corporate action.
                            </p>
                        </div>

                        {/* Download Section */}
                        <div className="bg-card border border-border p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <Download className="w-8 h-8 text-gold" />
                                <h3 className="font-display text-2xl text-foreground">Download the Scorecard</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                Access the complete S&P 500 audit with sector-by-sector analysis and 
                                company-level grades.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                                />
                                <button className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors">
                                    Download Scorecard
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
