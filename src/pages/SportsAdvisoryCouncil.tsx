import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Users, Globe, Award, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const SportsAdvisoryCouncil = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Sports Advisory Council"
                description="Athletes for National Security. Convening the icons of global sport as active participants in the allied security mission."
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
                        <EditableText name="sports.hero.label" defaultContent="Athletes for National Security" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="sports.hero.title" defaultContent="The Sports Advisory Council" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="sports.hero.subtitle" defaultContent="This Is Not About Sport. It Is Larger Than That." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="sports.hero.description" multiline defaultContent="Allied, united role models and icons working to strengthen the allied collective and inspire the next generation for purposeful action." />
                    </p>
                </div>
            </section>

            {/* Opening */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="sports.opening.p1" multiline defaultContent="Global sport is the largest cultural operating environment on Earth. Three billion people watched the 2022 FIFA World Cup. The Olympics command audiences across 200 nations. Major league franchises hold more soft-power currency in most cities than the governments that fund them. Brands understand this — and pay dearly for the association." />
                            </p>
                            <p>
                                <EditableText name="sports.opening.p2" multiline defaultContent="The world's most recognized athletes carry something no government can issue and no institution can manufacture: the genuine admiration of billions — born of collective, tribal loyalty — that creates a durable trust transcending generations. In the competition now underway for the future of the free world, that trust is among the most consequential strategic assets available." />
                            </p>
                            <p>
                                <EditableText name="sports.opening.p3" multiline defaultContent="Adversarial nations understood this long ago and have acted on it with precision. China fields state-sponsored athletes as instruments of soft power. Russia weaponizes global sport for narrative control. These are coordinated doctrines — sustained, deliberate, and effective. The free world's response has been uncoordinated and insufficient." />
                            </p>
                            <p>
                                <EditableText name="sports.opening.p4" multiline defaultContent="The Sports Advisory Council is Future Union's answer: organized, voluntary, and built on genuine conviction rather than pecuniary interests and state coercion." />
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="bg-card border-l-4 border-gold p-8 mb-12">
                            <Quote className="w-8 h-8 text-gold mb-4" />
                            <blockquote className="text-lg text-foreground italic leading-relaxed">
                                <EditableText name="sports.quote" multiline defaultContent="No government campaign, no policy brief, reaches the next generation the way a trusted athlete does. Adversarial states have organized their athletes as strategic instruments. The free world has not. The Sports Advisory Council changes that." />
                            </blockquote>
                        </div>

                        {/* Purpose */}
                        <div className="flex items-center gap-4 mb-8">
                            <Award className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="sports.purpose.title" defaultContent="Purpose" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="sports.purpose.p1" multiline defaultContent="The Sports Advisory Council is a first-of-its-kind advisory body convening world-class athletes, iconic leaders, and sports executives around a singular mission: harness the cultural power of global sport to inspire the next generation toward national service and the defense of free-world values." />
                            </p>
                            <p>
                                <EditableText name="sports.purpose.p2" multiline defaultContent="Athletes dedicate their early lives to perfecting a craft with a finite horizon. What follows — a platform, a brand, an audience that endures — is meaningful. But this Council poses a harder question: is there something more? A contribution to a purpose larger than any individual career or country? For those who have competed at the highest level of human achievement, the unfinished collective mission may prove the most consequential one yet." />
                            </p>
                            <p>
                                <EditableText name="sports.purpose.p3" multiline defaultContent="This is not a league partnership or a promotional alignment with military service. It is an action-oriented coalition that recognizes what sport already is — the most powerful non-governmental bond uniting athletes, nations, and citizens across the world — and directs that power toward a moment that demands it." />
                            </p>
                        </div>

                        {/* The Global Moment */}
                        <div className="flex items-center gap-4 mb-8">
                            <Globe className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="sports.moment.title" defaultContent="The Global Moment" />
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                            <p>
                                <EditableText name="sports.moment.p1" multiline defaultContent="Long-accepted bonds between allied nations are increasingly tested. New avenues of durable allegiance and unity are not merely desirable — they are necessary. Sport represents the most underutilized of those avenues: a channel for shared purpose that transcends political uncertainty and reaches billions of passionate fans who look to athletes as trusted role models." />
                            </p>
                            <p>
                                <EditableText name="sports.moment.p2" multiline defaultContent="While the west remained distracted, adversaries saw an opportunity, specifically, recognizing that the decisive competition is not confined to military pacts or international treaties. It is cultural, generational, and being waged on every pitch, field, rink, stadium, and arena where the world's attention gathers. In this contest for the next generation, the successful outcome for allied nations is anything but assured." />
                            </p>
                        </div>

                        {/* Founding Board */}
                        <div className="flex items-center gap-4 mb-8">
                            <Users className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="sports.board.title" defaultContent="Founding Board" />
                            </h2>
                        </div>
                        <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-6">
                            Athletes' Advisory Committee: The Founding Board · By Invitation Only
                        </p>
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
                                <EditableText name="sports.council.announce" multiline defaultContent="The inaugural, invitation-only cohort of Sports Advisory Council members will be announced in 2026." />
                            </p>
                        </div>

                        {/* Closing */}
                        <div className="bg-card border border-gold/30 p-8">
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="sports.closing" multiline defaultContent="The competition for the future will not be won by governments alone. It will be won by the cultures and figures that shape what billions of people believe is worth defending. The Sports Advisory Council is Future Union's commitment to winning that reality." />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default SportsAdvisoryCouncil;
