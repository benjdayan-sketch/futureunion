import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
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
                        Privacy Policy
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

                        <h2 className="font-display text-2xl text-foreground mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Future Union ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">2. Information We Collect</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We may collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, or fill out a form. This may include your name, email address, and any other information you choose to provide.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We use the information we collect to respond to your inquiries, send you updates and communications, improve our website and services, and comply with legal obligations.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We may use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">5. Information Sharing</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We do not sell your personal information. We may share your information with service providers who assist us in operating our website, or as required by law.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">6. Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">7. Your Rights</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. Contact us to exercise these rights.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">8. Changes to This Policy</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">9. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            If you have questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPage;
