import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ExternalLink, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";

const featuredArticles = [
    {
        title: "Tech Venture Capital Firms Pledge to Spurn Chinese Investors",
        source: "Washington Post",
        category: "Clean Capital",
    },
    {
        title: "Intel Venture Arm's China Tech Stakes Raise Alarm in Washington",
        source: "Financial Times",
        category: "National Security",
    },
    {
        title: "'Circle the Wagons': State Pension Funds Are Dumping Chinese Investments",
        source: "Politico",
        category: "Conflict Capital",
    },
    {
        title: "US-China Internet War Intensifies as House Passes TikTok Ban",
        source: "Wall Street Journal",
        category: "Technology",
    },
    {
        title: "The Race for Rare Earth Minerals Heats Up",
        source: "CNBC",
        category: "Critical Minerals",
    },
    {
        title: "America's Best Companies for Veterans",
        source: "Future Union",
        category: "Veteran Employers",
        internal: true,
        link: "/veteran-employers",
    },
];

const latestNotes = [
    {
        title: "Veterans Day: A Time for Reflection and Gratitude",
        date: "November 11, 2024",
        excerpt: "Today we honor those who have served and continue to serve our nation with courage and dedication.",
    },
    {
        title: "The Importance of Clean Capital in an Era of Geopolitical Competition",
        date: "October 2024",
        excerpt: "Why the source of investment capital matters more than ever for national security.",
    },
];

const ViewsPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Views"
                description="Featured coverage, analysis, and perspectives on democracy, technology, and the private sector."
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
                        <EditableText name="views.hero.label" defaultContent="News & Insights" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="views.hero.title" defaultContent="Views" />
                    </h1>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="views.hero.description" multiline defaultContent="Featured coverage, analysis, and perspectives on democracy, technology, and the private sector." />
                    </p>
                </div>
            </section>

            {/* Latest Notes */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <Newspaper className="w-8 h-8 text-gold" />
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                            <EditableText name="views.notes.title" defaultContent="Latest Notes" />
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {latestNotes.map((note, index) => (
                            <div
                                key={note.title}
                                className="bg-card border border-border p-8 hover:border-gold/50 transition-all duration-300 animate-fade-up opacity-0"
                                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                            >
                                <span className="text-gold text-sm"><EditableText name={`views.notes.${index}.date`} defaultContent={note.date} /></span>
                                <h3 className="font-display text-xl text-foreground mt-2 mb-4"><EditableText name={`views.notes.${index}.title`} defaultContent={note.title} /></h3>
                                <p className="text-muted-foreground text-sm"><EditableText name={`views.notes.${index}.excerpt`} multiline defaultContent={note.excerpt} /></p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Coverage */}
            <section className="py-16 bg-gradient-subtle">
                <div className="container mx-auto px-6">
                    <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
                        <EditableText name="views.featured.title" defaultContent="Featured" />
                    </h2>
                    <p className="text-muted-foreground mb-12">
                        <EditableText name="views.featured.subtitle" defaultContent="Coverage and analysis from leading publications" />
                    </p>

                    <div className="space-y-4">
                        {featuredArticles.map((article, index) => (
                            <div
                                key={article.title}
                                className="bg-card border border-border p-6 hover:border-gold/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-up opacity-0"
                                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                            >
                                <div className="flex-1">
                                    <span className="text-gold text-xs uppercase tracking-wide"><EditableText name={`views.articles.${index}.category`} defaultContent={article.category} /></span>
                                    <h3 className="text-foreground font-medium mt-1"><EditableText name={`views.articles.${index}.title`} defaultContent={article.title} /></h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-muted-foreground"><EditableText name={`views.articles.${index}.source`} defaultContent={article.source} /></span>
                                    {article.internal ? (
                                        <Link
                                            to={article.link!}
                                            className="text-gold hover:text-gold/80 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <span className="text-muted-foreground">
                                            <ExternalLink className="w-4 h-4" />
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wide mb-4">
                        <EditableText name="views.cta.title" defaultContent="Stay Informed" />
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        <EditableText name="views.cta.description" multiline defaultContent="Follow Future Union for the latest updates on democracy, technology, and private sector leadership." />
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <EditableLink
                            name="views.cta.twitter.text"
                            linkName="views.cta.twitter.href"
                            defaultContent="Follow on Twitter"
                            defaultHref="https://twitter.com/_futureunion_"
                            defaultTarget="_blank"
                            className="px-6 py-3 border border-border text-foreground hover:border-gold hover:text-gold transition-colors uppercase tracking-wide text-sm"
                        />
                        <EditableLink
                            name="views.cta.contact.text"
                            linkName="views.cta.contact.href"
                            defaultContent="Contact Us"
                            defaultHref="mailto:joinus@futureunion.co"
                            className="px-6 py-3 bg-gold text-navy font-semibold uppercase tracking-wide text-sm hover:bg-gold/90 transition-colors"
                        />
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default ViewsPage;
