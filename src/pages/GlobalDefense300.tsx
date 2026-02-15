import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Download, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const GlobalDefense300 = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Global Defense 300"
                description="We stripped away the marketing hype to grade the top companies on a single metric: ability to solve National Security Challenges. The free world prevails only if the Arsenal of Democracy is global."
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
                        <EditableText name="defense300.hero.label" defaultContent="The Builders" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="defense300.hero.title" defaultContent="The Global Defense 300" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="defense300.hero.subtitle" defaultContent='"The Shield Must Be Shared."' />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="defense300.hero.description" multiline defaultContent="The free world prevails only if the Arsenal of Democracy is global. We stripped away the marketing hype to grade the top companies on a single metric: ability to solve National Security Challenges." />
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <Shield className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="defense300.content.title" defaultContent="Beyond American Primes" />
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="defense300.content.p1" multiline defaultContent="For too long, the narrative has ignored the critical contributions of our international allies. As such, we are the first ranking to look past the American government primes and emerging defenders to find the critical international players who are building the sovereign capabilities required for modern allied deterrence." />
                            </p>
                            <p>
                                <EditableText name="defense300.content.p2" multiline defaultContent="Future Union aligns the global capital and industrial base required to win the future—independently and collectively." />
                            </p>
                            <p>
                                <EditableText name="defense300.content.p3" multiline defaultContent="Instead of looking at technologies and venture funding, we are looking at outcomes—singularly, solutions delivered, by any and all means available, which candidates are the leaders in solving problems." />
                            </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-card border border-gold/30 p-8 text-center">
                                <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
                                <h3 className="font-display text-3xl text-foreground mb-2">300</h3>
                                <p className="text-gold font-semibold uppercase tracking-wider text-sm">Companies Ranked</p>
                                <p className="text-muted-foreground text-sm mt-2">From Paris to Seoul</p>
                            </div>
                            <div className="bg-card border border-gold/30 p-8 text-center">
                                <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                                <h3 className="font-display text-3xl text-foreground mb-2">Solutions</h3>
                                <p className="text-gold font-semibold uppercase tracking-wider text-sm">Not Funds Raised</p>
                                <p className="text-muted-foreground text-sm mt-2">Our singular metric</p>
                            </div>
                        </div>

                        {/* Celebration Box */}
                        <div className="bg-card border border-border p-8 mb-12">
                            <h3 className="font-display text-2xl text-foreground mb-4">
                                <EditableText name="defense300.celebration.title" defaultContent="Celebrating Sovereign Defense Tech" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="defense300.celebration.description" multiline defaultContent="We are shining a light on the 300 companies—from Paris to Seoul—that are developing the capabilities the Alliance needs. We celebrate the rise of sovereign defense tech as the ultimate partner to American strength." />
                            </p>
                        </div>

                        {/* Download Section */}
                        <div className="bg-card border border-border p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <Download className="w-8 h-8 text-gold" />
                                <h3 className="font-display text-2xl text-foreground"><EditableText name="defense300.download.title" defaultContent="View the Allied Matrix" /></h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                <EditableText name="defense300.download.description" multiline defaultContent="Access the complete Global Defense 300 ranking with detailed analysis of each company's national security contributions." />
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                                />
                                <button className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors">
                                    View Matrix
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

export default GlobalDefense300;
