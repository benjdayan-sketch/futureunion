import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, GraduationCap, Zap, Target, Users, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const GenerationalCoalition = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="The Generational Coalition"
                description="The Leaders of the Next Allied Century. Starting Now. Seeding the next generation of the allied mission on campuses across the allied world."
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
                        <EditableText name="gencoal.hero.label" defaultContent="The Next Generation" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="gencoal.hero.title" defaultContent="The Generational Coalition" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="gencoal.hero.subtitle" defaultContent="The Leaders of the Next Allied Century. Starting Now." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="gencoal.hero.description" multiline defaultContent="Every consequential geopolitical competition has been decided, ultimately, by the generation willing to step forward and meet it. The question facing this generation is not whether the competition exists. It does — and it is accelerating. The question is whether the next generation of allied leaders will arrive prepared, connected, and committed to winning it." />
                    </p>
                </div>
            </section>

            {/* Opening */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="gencoal.opening.p1" multiline defaultContent="Future Union's Generational Coalition exists to ensure the answer is yes." />
                            </p>
                            <p>
                                <EditableText name="gencoal.opening.p2" multiline defaultContent="We are seeding the next generation of the allied mission — on campuses across the allied world, connecting students, emerging leaders, and young professionals to the ecosystem of builders, investors, and policymakers who are shaping the competition's outcome. To whom much is promised, much is demanded. This generation has been promised a world worth defending. The Coalition is the beginning of that demand being met." />
                            </p>
                        </div>

                        {/* The Gap */}
                        <div className="flex items-center gap-4 mb-8">
                            <Target className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="gencoal.gap.title" defaultContent="The Gap We Are Closing" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="gencoal.gap.p1" multiline defaultContent="The adversaries of the free world are not waiting for the next generation to find its footing. China, in particular, has invested systematically in cultivating ideologically aligned young leaders — in its own institutions, in international universities, and through influence operations designed to shape the worldview of tomorrow's decision-makers before they reach positions of consequence." />
                            </p>
                            <p>
                                <EditableText name="gencoal.gap.p2" multiline defaultContent="The allied response has been uncoordinated, underfunded, and largely reactive. Campus organizations exist — focused on policy, on cybersecurity, on veteran affairs — but none of them convene the next generation around the full breadth of the allied mission: the technology, the capital, the policy, and the cultural conviction required to ensure the free world does not merely participate in the competition ahead but dominates it." />
                            </p>
                            <p className="text-foreground font-semibold">
                                <EditableText name="gencoal.gap.p3" defaultContent="The Generational Coalition is built for that full breadth." />
                            </p>
                        </div>

                        {/* The Mission */}
                        <div className="flex items-center gap-4 mb-8">
                            <Zap className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="gencoal.mission.title" defaultContent="The Mission" />
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            <EditableText name="gencoal.mission.intro" defaultContent="Two imperatives drive everything the Coalition does:" />
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-card border border-border p-8">
                                <h3 className="font-display text-xl text-gold mb-3">Build Faster</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    <EditableText name="gencoal.mission.build" multiline defaultContent="The next generation of allied builders needs connections, resources, and the freedom to experiment — a dynamic environment designed for testing, iteration, and the kind of trial-and-error that produces breakthrough capability. The Coalition provides the network, the mentorship, and the direct access to Future Union's ecosystem of investors, executives, and defense innovators that accelerates the journey from idea to impact." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-8">
                                <h3 className="font-display text-xl text-gold mb-3">Expect More</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    <EditableText name="gencoal.mission.expect" multiline defaultContent="The greatest asset of this generation is its potential. The greatest risk is that potential remaining unrealized — diffused across individual ambition rather than channeled into collective purpose. The Coalition sets a higher standard: elevating responsibility alongside ability, and holding the next generation of allied leaders accountable to the mission they are inheriting." />
                                </p>
                            </div>
                        </div>

                        {/* What The Coalition Provides */}
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
                            <EditableText name="gencoal.provides.title" defaultContent="What The Coalition Provides" />
                        </h2>
                        <div className="space-y-4 mb-12">
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <GraduationCap className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Campus Chapters</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="gencoal.benefit1" multiline defaultContent="A structured presence at leading universities across the allied world — connecting students directly to the Future Union ecosystem and to each other across national borders." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Direct Access</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="gencoal.benefit2" multiline defaultContent="Commission Fellows, Intrepid List investors, Global Defense Champions League companies, and Future Union's full network are made accessible to Coalition members — providing the kind of mentorship and professional connectivity that no classroom can replicate." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Experiential Programming</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="gencoal.benefit3" multiline defaultContent="Convenings, competitions, and collaborative projects designed to develop the analytical, strategic, and operational capabilities the next generation will need — not as theory, but as practice." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <div className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">A Path Forward</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <EditableText name="gencoal.benefit4" multiline defaultContent="The Coalition is the entry point to the Future Union ecosystem. The most capable Coalition members become the candidates for The Commission, the founders recognized by the Global Defense Champions League, and the next cohort of allied leaders the free world depends on." />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leadership */}
                        <div className="flex items-center gap-4 mb-8">
                            <Users className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="gencoal.leadership.title" defaultContent="Leadership" />
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {[1, 2].map((i) => (
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

                        {/* Closing */}
                        <div className="bg-card border border-gold/30 p-8 mb-8">
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    <EditableText name="gencoal.closing.p1" multiline defaultContent="The free world has never lacked the talent to prevail in the competitions that have defined its history. It has occasionally lacked the organization to deploy that talent with purpose and urgency. The Generational Coalition is Future Union's commitment to ensuring that does not happen in this one." />
                                </p>
                                <p className="text-gold font-semibold italic">
                                    <EditableText name="gencoal.closing.tagline" defaultContent="The next allied century will be secured by the generation being formed right now. The Coalition is where that formation begins." />
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors text-center">
                                Join The Coalition
                            </Link>
                            <Link to="/contact" className="px-8 py-3 border border-gold text-gold font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors text-center">
                                Establish a Campus Chapter
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

export default GenerationalCoalition;
