import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText, Download, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const researchReports = [
    {
        key: "report1",
        title: "America First Investment Policy",
        subtitle: "White House Executive Order",
        description: "Analysis and recommended next steps for the Executive Order on America First investment priorities.",
        icon: FileText,
    },
    {
        key: "report2",
        title: "2024 Top Employers for Veterans",
        subtitle: "3rd Edition",
        description: "Ranking Veteran Employment based on a Rubric of Corporate Transparency fused with Action.",
        icon: FileText,
        link: "/veteran-employers",
    },
    {
        key: "report3",
        title: "US-China Decoupling Index",
        subtitle: "2nd Edition",
        description: "The evaluation & rankings of corporate entanglements with autocratic, adversarial states.",
        icon: FileText,
    },
    {
        key: "report4",
        title: "ByteDance Spotlight Report",
        subtitle: "TikTok: Tip of America's Global Investment Conundrum",
        description: "The Comprehensive Report of the Global Investors invested in ByteDance.",
        icon: FileText,
    },
];

const ResearchPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Research"
                description="In-depth analysis and reports on critical issues at the intersection of democracy, technology, and national security."
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
                        <EditableText name="research.hero.label" defaultContent="Future Union" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="research.hero.title" defaultContent="Research" />
                    </h1>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="research.hero.description" multiline defaultContent="In-depth analysis and reports on critical issues at the intersection of democracy, technology, and national security." />
                    </p>
                </div>
            </section>

            {/* Policy & Proposals */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <BookOpen className="w-8 h-8 text-gold" />
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                            <EditableText name="research.policy.title" defaultContent="Policy & Proposals" />
                        </h2>
                    </div>

                    <div className="bg-card border border-border p-8 mb-8">
                        <h3 className="font-display text-2xl text-foreground mb-4"><EditableText name="research.item1.title" defaultContent="America First Investment Policy" /></h3>
                        <p className="text-muted-foreground mb-6">
                            <EditableText name="research.item1.description" multiline defaultContent="Our analysis of the White House Executive Order and recommended next steps for implementing America First investment priorities that protect national security while promoting economic growth." />
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                            />
                            <button className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Download Report
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Research */}
            <section className="py-16 bg-gradient-subtle">
                <div className="container mx-auto px-6">
                    <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-12">
                        <EditableText name="research.list.title" defaultContent="Our Research" />
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {researchReports.slice(1).map((report, index) => (
                            <div
                                key={report.key}
                                className="bg-card border border-border p-8 hover:border-gold/50 transition-all duration-300 animate-fade-up opacity-0"
                                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <report.icon className="w-8 h-8 text-gold flex-shrink-0" />
                                    <div>
                                        <span className="text-gold text-sm uppercase tracking-wide"><EditableText name={`research.${report.key}.subtitle`} defaultContent={report.subtitle} /></span>
                                        <h3 className="font-display text-xl text-foreground mt-1"><EditableText name={`research.${report.key}.title`} defaultContent={report.title} /></h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm mb-6"><EditableText name={`research.${report.key}.description`} multiline defaultContent={report.description} /></p>

                                {report.link ? (
                                    <Link
                                        to={report.link}
                                        className="inline-flex items-center gap-2 text-gold hover:underline text-sm"
                                    >
                                        View Report →
                                    </Link>
                                ) : (
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex-1 px-3 py-2 bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                                        />
                                        <button className="px-4 py-2 bg-gold text-navy font-semibold uppercase tracking-wider text-xs hover:bg-gold/90 transition-colors">
                                            Download
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default ResearchPage;
