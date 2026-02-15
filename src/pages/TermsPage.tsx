import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";

const TermsPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Terms of Use"
                description="Read our Terms of Use to understand the rules and regulations for using the Future Union website."
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
                        <EditableText name="terms.label" defaultContent="Legal" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="terms.title" defaultContent="Terms of Use" />
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            <strong><EditableText name="terms.lastUpdatedLabel" defaultContent="Last Updated:" /></strong> <EditableText name="terms.lastUpdatedDate" defaultContent="December 2024" />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="terms.h1" defaultContent="1. Acceptance of Terms" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="terms.p1" multiline defaultContent={`By accessing and using the Future Union website (the "Site"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.`} />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="terms.h2" defaultContent="2. Use of the Site" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="terms.p2" multiline defaultContent="You may use the Site for lawful purposes only. You agree not to use the Site in any way that could damage, disable, or impair the Site or interfere with any other party's use of the Site." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="terms.h3" defaultContent="3. Intellectual Property" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="terms.p3" multiline defaultContent="All content on this Site, including text, graphics, logos, and images, is the property of Future Union or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, or create derivative works without prior written consent." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="terms.h4" defaultContent="4. Disclaimer of Warranties" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="terms.p4" multiline defaultContent={`The Site is provided "as is" without warranties of any kind, either express or implied. Future Union does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.`} />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="terms.h5" defaultContent="5. Limitation of Liability" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="terms.p5" multiline defaultContent="In no event shall Future Union be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="terms.h6" defaultContent="6. Changes to Terms" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="terms.p6" multiline defaultContent="Future Union reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site constitutes acceptance of any modified terms." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="terms.h7" defaultContent="7. Contact Information" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="terms.p7" defaultContent="For questions about these Terms of Use, please contact us at" />{" "}
                            <EditableLink
                                name="terms.email.text"
                                linkName="terms.email.href"
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

export default TermsPage;
