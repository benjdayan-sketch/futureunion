import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";

const PrivacyPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Privacy Policy"
                description="Learn about how Future Union collects, uses, and protects your personal information."
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-subtle">
                <div className="container mx-auto px-6">
                    <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <span className="text-gold font-semibold uppercase tracking-widest text-sm">
                        <EditableText name="privacy.label" defaultContent="Legal" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="privacy.title" defaultContent="Privacy Policy" />
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            <strong><EditableText name="privacy.lastUpdatedLabel" defaultContent="Last Updated:" /></strong> <EditableText name="privacy.lastUpdatedDate" defaultContent="December 2024" />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h1" defaultContent="1. Introduction" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p1" multiline defaultContent={`Future Union ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.`} />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h2" defaultContent="2. Information We Collect" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p2" multiline defaultContent="We may collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, or fill out a form. This may include your name, email address, and any other information you choose to provide." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h3" defaultContent="3. How We Use Your Information" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p3" multiline defaultContent="We use the information we collect to respond to your inquiries, send you updates and communications, improve our website and services, and comply with legal obligations." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h4" defaultContent="4. Cookies and Tracking Technologies" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p4" multiline defaultContent="We may use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h5" defaultContent="5. Information Sharing" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p5" multiline defaultContent={`We do not sell your personal information. We may share your information with service providers who assist us in operating our website, or as required by law.`} />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h6" defaultContent="6. Data Security" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p6" multiline defaultContent="We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h7" defaultContent="7. Your Rights" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p7" multiline defaultContent="Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. Contact us to exercise these rights." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h8" defaultContent="8. Changes to This Policy" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p8" multiline defaultContent="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="privacy.h9" defaultContent="9. Contact Us" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="privacy.p9" defaultContent="If you have questions about this Privacy Policy, please contact us at" />{" "}
                            <EditableLink
                                name="privacy.email.text"
                                linkName="privacy.email.href"
                                defaultContent="joinus@futureunion.co"
                                defaultHref="mailto:joinus@futureunion.co"
                                className="text-gold hover:underline"
                            />
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPage;
