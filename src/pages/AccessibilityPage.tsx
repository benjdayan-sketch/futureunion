import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";

const AccessibilityPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Accessibility Statement"
                description="Our commitment to making the Future Union website accessible to everyone, including people with disabilities."
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
                        <EditableText name="accessibility.label" defaultContent="Legal" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="accessibility.title" defaultContent="Accessibility Statement" />
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl prose prose-lg dark:prose-invert">
                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="accessibility.h1" defaultContent="Our Commitment" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="accessibility.p1" multiline defaultContent="Future Union is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="accessibility.h2" defaultContent="Conformance Status" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="accessibility.p2" multiline defaultContent="We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities, and more user-friendly for everyone." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="accessibility.h3" defaultContent="Accessibility Features" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            <EditableText name="accessibility.p3" defaultContent="Our website includes the following accessibility features:" />
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li><EditableText name="accessibility.li1" defaultContent="Keyboard navigation support" /></li>
                            <li><EditableText name="accessibility.li2" defaultContent="Semantic HTML structure" /></li>
                            <li><EditableText name="accessibility.li3" defaultContent="Alternative text for images" /></li>
                            <li><EditableText name="accessibility.li4" defaultContent="Sufficient color contrast ratios" /></li>
                            <li><EditableText name="accessibility.li5" defaultContent="Resizable text without loss of functionality" /></li>
                            <li><EditableText name="accessibility.li6" defaultContent="Dark mode support for reduced eye strain" /></li>
                            <li><EditableText name="accessibility.li7" defaultContent="Descriptive link text" /></li>
                            <li><EditableText name="accessibility.li8" defaultContent="ARIA labels for interactive elements" /></li>
                        </ul>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="accessibility.h4" defaultContent="Feedback" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="accessibility.p4" multiline defaultContent="We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:" />
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>
                                <EditableText name="accessibility.email.label" defaultContent="Email: " />
                                <EditableLink
                                    name="accessibility.email.text"
                                    linkName="accessibility.email.href"
                                    defaultContent="joinus@futureunion.co"
                                    defaultHref="mailto:joinus@futureunion.co"
                                    className="text-gold hover:underline"
                                />
                            </li>
                        </ul>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="accessibility.h5" defaultContent="Continuous Improvement" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="accessibility.p5" multiline defaultContent="We regularly review our website to identify and fix accessibility issues. Our goal is to provide an inclusive experience for all visitors, regardless of ability." />
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4"><EditableText name="accessibility.h6" defaultContent="Assistive Technologies" /></h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="accessibility.p6" multiline defaultContent="Our website is designed to be compatible with various assistive technologies, including screen readers, screen magnification software, and voice recognition software." />
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AccessibilityPage;
