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
        subtitle: "Executive Order Analysis & Implementation Framework",
        description: "Our analysis of the White House Executive Order on America First investment priorities examines its implications for national security capital allocation and provides a concrete implementation framework for protecting allied security interests while sustaining U.S. technological leadership. This is not a summary of the Order. It is an assessment of what it will take to make it work.",
        icon: FileText,
    },
    {
        key: "report2",
        title: "Veterans Transparency Index — 4th Edition (2025)",
        subtitle: "The Definitive Ranking of Veteran Employment in America",
        description: "Standardizing for business model differences across industries, the Index strips away self-reported claims and measures only verified actions that produce demonstrable outcomes for transitioning service members. The definitive ranking of the companies that have earned the right to be called the best employers of those who served.",
        icon: FileText,
        link: "/veteran-employers",
    },
    {
        key: "report3",
        title: "Decoupling & Separation Index — 3rd Edition (2025)",
        subtitle: "The Scorecard for Economic Sovereignty",
        description: "An audit of the S&P 500 measuring corporate disengagement from adversarial entanglements — tracking which companies have meaningfully reduced the leverage Russia and China exploit to extract concessions, access intellectual property, and exert strategic influence. The findings are unambiguous: sectors including Information Technology remain dangerously enmeshed.",
        icon: FileText,
        link: "/decoupling-index",
    },
    {
        key: "report4",
        title: "TikTok: The Tip of America's Global Investment Conundrum",
        subtitle: "ByteDance Spotlight Report",
        description: "TikTok is not the problem. It is the most visible symptom of a far larger challenge: the depth of Western institutional capital invested in adversarial technology ecosystems. This report maps the global investor base behind ByteDance — the most comprehensive public accounting of this capital exposure available.",
        icon: FileText,
    },
];

const ResearchPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Research"
                description="Intelligence at the Intersection of Capital, Security, and Democracy. Independent, rigorous analysis built around a single standard: does this advance the allied mission?"
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
                        <EditableText name="research.hero.title" defaultContent="Future Union Research" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="research.hero.subtitle" defaultContent="Intelligence at the Intersection of Capital, Security, and Democracy." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="research.hero.description" multiline defaultContent="The decisions that determine allied security are made poorly when the underlying intelligence is incomplete, partisan, or captured by the interests it is meant to evaluate. Future Union's research exists to correct that — with independent, rigorous analysis built around a single standard: does this advance the allied mission?" />
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
                        <h3 className="font-display text-xl text-foreground mb-2">
                            <EditableText name="research.policy.report.title" defaultContent="America First Investment Policy" />
                        </h3>
                        <p className="text-gold text-sm font-semibold mb-3">Executive Order Analysis & Implementation Framework</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            <EditableText name="research.policy.report.desc" multiline defaultContent="Our analysis of the White House Executive Order on America First investment priorities examines its implications for national security capital allocation and provides a concrete implementation framework for protecting allied security interests while sustaining U.S. technological leadership. This is not a summary of the Order. It is an assessment of what it will take to make it work." />
                        </p>
                        <button className="px-6 py-2 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors">
                            Download the Report
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Research */}
            <section className="py-16 bg-gradient-subtle">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <FileText className="w-8 h-8 text-gold" />
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                            <EditableText name="research.reports.title" defaultContent="Our Research" />
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {researchReports.slice(1).map((report) => (
                            <div key={report.key} className="bg-card border border-border p-8 flex flex-col">
                                <h3 className="font-display text-xl text-foreground mb-2">{report.title}</h3>
                                <p className="text-gold text-sm font-semibold mb-3">{report.subtitle}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{report.description}</p>
                                {report.link ? (
                                    <Link to={report.link} className="text-gold font-semibold uppercase tracking-wider text-sm hover:text-gold/80 transition-colors">
                                        View the Report →
                                    </Link>
                                ) : (
                                    <button className="text-gold font-semibold uppercase tracking-wider text-sm hover:text-gold/80 transition-colors text-left">
                                        Download the Report →
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="research.closing" multiline defaultContent="Every report Future Union publishes represents a deliberate intervention — an analysis that did not exist, a dataset that had not been assembled, or a policy argument that had not been made with sufficient rigor to move the conversation." />
                        </p>
                        <p className="text-muted-foreground text-sm italic mb-6">
                            To inquire about research partnerships, commissioned analysis, or data access:
                        </p>
                        <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors inline-block">
                            Contact the Research Team
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default ResearchPage;
