import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AccessibilityPage = () => {
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
                        Accessibility Statement
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl prose prose-lg dark:prose-invert">
                        <h2 className="font-display text-2xl text-foreground mb-4">Our Commitment</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Future Union is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">Conformance Status</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities, and more user-friendly for everyone.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">Accessibility Features</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Our website includes the following accessibility features:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Keyboard navigation support</li>
                            <li>Semantic HTML structure</li>
                            <li>Alternative text for images</li>
                            <li>Sufficient color contrast ratios</li>
                            <li>Resizable text without loss of functionality</li>
                            <li>Dark mode support for reduced eye strain</li>
                            <li>Descriptive link text</li>
                            <li>ARIA labels for interactive elements</li>
                        </ul>

                        <h2 className="font-display text-2xl text-foreground mb-4">Feedback</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>
                                Email:{" "}
                                <a href="mailto:joinus@futureunion.co" className="text-gold hover:underline">
                                    joinus@futureunion.co
                                </a>
                            </li>
                        </ul>

                        <h2 className="font-display text-2xl text-foreground mb-4">Continuous Improvement</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We regularly review our website to identify and fix accessibility issues. Our goal is to provide an inclusive experience for all visitors, regardless of ability.
                        </p>

                        <h2 className="font-display text-2xl text-foreground mb-4">Assistive Technologies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Our website is designed to be compatible with various assistive technologies, including screen readers, screen magnification software, and voice recognition software.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AccessibilityPage;
