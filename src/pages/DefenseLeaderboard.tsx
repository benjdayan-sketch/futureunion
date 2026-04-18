import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, TrendingUp, BarChart3, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const sampleRankings = [
    { rank: 1, move: "—", company: "Skycutter", sector: "Autonomous Systems", momentum: "↑" },
    { rank: 2, move: "↑+1", company: "Neros", sector: "Strike / Energetics", momentum: "↑" },
    { rank: 3, move: "↓-1", company: "Napatree", sector: "AI & EW", momentum: "→" },
    { rank: 4, move: "—", company: "ModalAI", sector: "Autonomous Systems", momentum: "↑" },
    { rank: 5, move: "↑+2", company: "Auterion", sector: "Compute & PNT", momentum: "↑" },
];

const sectors = [
    "Space", "Strike & Energetics", "Autonomous Systems",
    "Intelligence, AI & Electronic Warfare", "Cybersecurity",
    "Quantum, Compute & PNT", "Advanced Manufacturing & Robotics", "Strategic Resources"
];

const DefenseLeaderboard = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="The Defense Leaderboard"
                description="The Live Ranking of Allied Defense's Most Consequential Companies. Updated continuously, tracking contracts awarded, capabilities demonstrated, and performance verified."
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
                        <EditableText name="leaderboard.hero.label" defaultContent="The Power Matrix" />
                    </span>
                    <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                        <EditableText name="leaderboard.hero.title" defaultContent="The Defense Leaderboard" />
                    </h1>
                    <p className="mt-4 text-2xl text-gold font-semibold italic">
                        <EditableText name="leaderboard.hero.subtitle" defaultContent="The Live Ranking of Allied Defense's Most Consequential Companies." />
                    </p>
                    <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                        <EditableText name="leaderboard.hero.description" multiline defaultContent="Defense procurement moves fast. The Power Matrix moves with it. Updated continuously, the Defense Leaderboard tracks the companies at the forefront of allied defense contracting — ranked not by valuation, not by press releases, but by what actually counts: contracts awarded, capabilities demonstrated, and performance verified under operational conditions." />
                    </p>
                </div>
            </section>

            {/* Leaderboard Table */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            <EditableText name="leaderboard.table.intro" multiline defaultContent="Think of it as the standings table for the defense industrial base. Every award, every gauntlet result, every deployment milestone moves the needle. The companies at the top earned it. The ones rising are worth watching." />
                        </p>

                        {/* Sample Table */}
                        <div className="bg-card border border-border overflow-hidden mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-border bg-gradient-subtle">
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Rank</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Move</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Company</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Sector</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Momentum</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sampleRankings.map((row) => (
                                            <tr key={row.rank} className="border-b border-border/50 hover:bg-gradient-subtle transition-colors">
                                                <td className="px-4 py-3 font-display text-gold">{row.rank}</td>
                                                <td className="px-4 py-3 text-muted-foreground text-sm">{row.move}</td>
                                                <td className="px-4 py-3 font-semibold text-foreground">{row.company}</td>
                                                <td className="px-4 py-3 text-muted-foreground text-sm">{row.sector}</td>
                                                <td className="px-4 py-3">
                                                    <span className={row.momentum === "↑" ? "text-green-500" : "text-muted-foreground"}>
                                                        {row.momentum}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-4 py-2 text-xs text-muted-foreground italic border-t border-border">
                                Rankings updated weekly. Contract values reflect verified, publicly available award data.
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="flex items-center gap-4 mb-8">
                            <BarChart3 className="w-10 h-10 text-gold" />
                            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                                <EditableText name="leaderboard.how.title" defaultContent="How It Works" />
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <EditableText name="leaderboard.how.intro" defaultContent="The Power Matrix is scored across four weighted dimensions:" />
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-semibold text-foreground mb-2">Contract Awards</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="leaderboard.dim1" multiline defaultContent="Verified procurement awards and option exercises, weighted by strategic domain priority." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-semibold text-foreground mb-2">Operational Performance</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="leaderboard.dim2" multiline defaultContent="Gauntlet results, field evaluations, and deployment records from allied defense programs." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-semibold text-foreground mb-2">Production Capability</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="leaderboard.dim3" multiline defaultContent="Assessed capacity to deliver at scale under operational timelines — not projected, but verified." />
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6">
                                <h3 className="font-semibold text-foreground mb-2">Momentum Score</h3>
                                <p className="text-muted-foreground text-sm">
                                    <EditableText name="leaderboard.dim4" multiline defaultContent="A proprietary composite tracking trajectory: rising entrants, accelerating awards, and program expansion signals." />
                                </p>
                            </div>
                        </div>

                        {/* Sectors Tracked */}
                        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
                            <EditableText name="leaderboard.sectors.title" defaultContent="Sectors Tracked" />
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
                            {sectors.map((s) => (
                                <div key={s} className="bg-gradient-subtle border border-border p-3 text-center">
                                    <span className="text-foreground font-semibold text-xs">{s}</span>
                                </div>
                            ))}
                        </div>

                        {/* Watch List */}
                        <div className="bg-card border border-gold/30 p-8 mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-6 h-6 text-gold" />
                                <h3 className="font-display text-2xl text-foreground">
                                    <EditableText name="leaderboard.watchlist.title" defaultContent="Watch List" />
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                <EditableText name="leaderboard.watchlist.desc" multiline defaultContent="A dedicated tier for high-momentum entrants not yet in the top rankings — but whose trajectory, contract pipeline, or capability profile places them firmly in contention. The Watch List is where future Power Matrix entrants are identified before the market catches on." />
                            </p>
                        </div>

                        {/* Closing */}
                        <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                            <p>
                                <EditableText name="leaderboard.closing.p1" multiline defaultContent="The defense industrial base is not static. Neither is this ranking." />
                            </p>
                            <p>
                                <EditableText name="leaderboard.closing.p2" multiline defaultContent="The Power Matrix exists because the gap between who is winning contracts and who is winning coverage has grown too wide for too long. We close that gap — every week, in public, with data." />
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors text-center">
                                View the Full Power Matrix
                            </Link>
                            <Link to="/contact" className="px-8 py-3 border border-gold text-gold font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors text-center">
                                Submit a Company for Consideration
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

export default DefenseLeaderboard;
