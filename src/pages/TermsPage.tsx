import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-subtle">
                <div className="container mx-auto px-6">
                    <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <span className="text-gold font-semibold uppercase tracking-widest text-sm">
                        Legal
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        Terms of Use
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            <strong>Last Updated:</strong> December 2024
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            By accessing and using the Future Union website (the "Site"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">2. Use of the Site</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            You may use the Site for lawful purposes only. You agree not to use the Site in any way that could damage, disable, or impair the Site or interfere with any other party's use of the Site.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">3. Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            All content on this Site, including text, graphics, logos, and images, is the property of Future Union or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, or create derivative works without prior written consent.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">4. Disclaimer of Warranties</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            The Site is provided "as is" without warranties of any kind, either express or implied. Future Union does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">5. Limitation of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            In no event shall Future Union be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">6. Changes to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Future Union reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site constitutes acceptance of any modified terms.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">7. Contact Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            For questions about these Terms of Use, please contact us at{" "}
                            <a href="mailto:joinus@futureunion.co" className="text-gold hover:underline">
                                joinus@futureunion.co
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TermsPage;
