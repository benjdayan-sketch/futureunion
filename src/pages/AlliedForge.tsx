import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Hammer, Globe, Users, Megaphone, Network, Eye, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const AlliedForge = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="The Allied Forge"
                description="Indomitable Together. The First Global Association of the Companies Forging the Arsenal of Democracy."
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
                        <EditableText name="forge.hero.label" defaultContent="The Association" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="forge.hero.title" defaultContent="The Allied Forge" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="forge.hero.subtitle" defaultContent="Indomitable Together." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="forge.hero.description" multiline defaultContent="The First Global Association of the Companies Forging the Arsenal of Democracy." />
                    </p>
                </div>
            </section>

            {/* Opening */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="forge.opening.p1" multiline defaultContent="The allied world does not lack innovative companies building the capabilities its security demands. What it has lacked is a unified voice — a collective able to advocate, convene, and coordinate across borders on behalf of the builders doing the most consequential work of this generation." />
                            </p>
                            <p>
                                <EditableText name="forge.opening.p2" multiline defaultContent="Existing associations are national in scope, government-facing in orientation, or think tank-adjacent in practice. None represent the full breadth of the global allied defense industrial base. None speak for the international innovators — from Paris to Seoul, Helsinki to Abu Dhabi — whose sovereign capabilities are as essential to allied deterrence as any American prime contractor." />
                            </p>
                            <p>
                                <EditableText name="forge.opening.p3" multiline defaultContent="The Allied Forge is Future Union's answer to that gap: the first global association convening the companies, founders, and executives at the frontier of allied defense and security innovation — providing the advocacy, infrastructure, and collective standing that the builders of the next allied century deserve." />
                            </p>
                        </div>

                        {/* The Name */}
                        <div className="bg-card border-l-4 border-gold p-8 mb-12">
                            <h3 className="font-display text-2xl text-foreground mb-4">
                                <EditableText name="forge.name.title" defaultContent="The Name" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="forge.name.p1" multiline defaultContent="A forge is where raw materials are transformed into instruments of strength — under pressure, with precision, and with purpose. It is where capability becomes reality. That is what The Allied Forge exists to do: take the dispersed talent, capital, and conviction of the global allied defense industrial base and forge it into something unified, consequential, and impossible to ignore. The name is not incidental. It is the mission." />
                            </p>
                        </div>

                        {/* The Mission */}
                        <div className="flex items-center gap-4 mb-8">
                            <Hammer className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="forge.mission.title" defaultContent="The Mission" />
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            <EditableText name="forge.mission.intro" multiline defaultContent="The allied industrial base will prevail in the competition ahead only if the conditions for building are as strong as the will to build. That requires two things above all else:" />
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-card border border-border p-8">
                                <h3 className="font-display text-xl text-gold mb-3">Build More</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    <EditableText name="forge.mission.build" multiline defaultContent="Allied security demands scale — and scale demands capital, resources, and an environment designed to accelerate rather than impede innovation. The Allied Forge advocates for the funding, investment frameworks, and industrial policy required to fuel united techno-economic growth across the allied world. The companies forging the next generation of allied capability need the collective infrastructure to match that ambition." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-8">
                                <h3 className="font-display text-xl text-gold mb-3">Regulate Smarter</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    <EditableText name="forge.mission.regulate" multiline defaultContent="The greatest barrier to allied defense innovation is not technological. It is regulatory — the friction that keeps cutting-edge capabilities from reaching the defense marketplace, impedes cross-border co-development among allied companies, and slows procurement timelines that adversaries are not constrained by. The Allied Forge advocates for harmonized, multinational rules designed for the speed and complexity of the competition we are actually in. Not deregulation. Regulation built for the reality of the threat." />
                                </p>
                            </div>
                        </div>

                        {/* What The Allied Forge Provides */}
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
                            <EditableText name="forge.provides.title" defaultContent="What The Allied Forge Provides" />
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="forge.provides.intro" defaultContent="Membership in The Allied Forge is not a logo on a website. It is access to the collective infrastructure that gives allied builders the standing, visibility, and advocacy that no single company can achieve alone." />
                        </p>
                        <div className="space-y-4 mb-12">
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <Megaphone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Collective Voice</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="forge.benefit1" multiline defaultContent="A unified advocacy platform representing the global allied defense industrial base in Washington, Brussels, London, Tokyo, and beyond — ensuring that the policy decisions shaping the allied industrial environment reflect the realities of the companies actually building within it." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <Network className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Allied Network</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="forge.benefit2" multiline defaultContent="Direct access to the full ecosystem: fellow builders, allied capital, government officials, and the Future Union community of investors, executives, and policy leaders working toward the same mission." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <Eye className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Global Visibility</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="forge.benefit3" multiline defaultContent="Recognition within the Global Defense Champions League framework and across Future Union's full platform — ensuring that the world's capital and its governments can find, evaluate, and support the companies most critical to allied security." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Policy Intelligence</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="forge.benefit4" multiline defaultContent="First access to Future Union's research, rankings, and policy assessments — the strategic intelligence that gives allied builders the context to navigate an environment moving faster than any single company can track alone." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leadership */}
                        <div className="flex items-center gap-4 mb-8">
                            <Users className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="forge.leadership.title" defaultContent="Leadership" />
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-card border border-border p-6 flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-subtle border border-border rounded-full flex items-center justify-center">
                                        <Users className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">To Be Announced</p>
                                        <p className="text-sm text-muted-foreground">Title · Organization</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-subtle border border-border p-6 mb-12">
                            <p className="text-muted-foreground">
                                <EditableText name="forge.advisory.announce" multiline defaultContent="The Allied Forge Advisory Board will be announced in 2026. Future Union is actively convening the founding cohort of advisors drawn from across the allied defense, investment, and policy community." />
                            </p>
                        </div>

                        {/* Closing */}
                        <div className="bg-card border border-gold/30 p-8 mb-8">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <EditableText name="forge.closing" multiline defaultContent="The companies on the right side of this competition are building faster, thinking more boldly, and taking more risk than any previous generation of allied defense innovators. They deserve an association equal to their ambition — one that operates at the speed of the threat, across the full breadth of the allied world, and with the singular conviction that the alliance that forges together prevails together." />
                            </p>
                            <p className="text-gold font-semibold italic">
                                <EditableText name="forge.closing.tagline" defaultContent="The Allied Forge is that association." />
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors text-center">
                                Join The Allied Forge
                            </Link>
                            <Link to="/global-defense-champions-league-2025" className="px-8 py-3 border border-gold text-gold font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors text-center">
                                Explore the Champions League
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default AlliedForge;
