import { ArrowRight, Shield, TrendingUp, Users, FileText, AlertTriangle, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";

const buildersInitiatives = [
  {
    title: "home.initiatives.gd300.title",
    defaultTitle: "Global Defense 300",
    yearKey: "home.initiatives.gd300.year",
    defaultYear: "2025",
    hook: "home.initiatives.gd300.hook",
    defaultHook: "The Shield Must Be Shared.",
    description: "home.initiatives.gd300.desc",
    defaultDescription: "The free world prevails only if the Arsenal of Democracy is global. We stripped away the marketing hype to grade the top companies on a single metric: ability to solve National Security Challenges. 300 companies—from Paris to Seoul—developing the capabilities the Alliance needs.",
    metrics: [
      { key: "home.initiatives.gd300.metric.1", defaultContent: "300 Companies" },
      { key: "home.initiatives.gd300.metric.2", defaultContent: "Global Reach" },
      { key: "home.initiatives.gd300.metric.3", defaultContent: "Solutions delivered, not funds raised" }
    ],
    link: "/global-defense-300",
    viewDetails: "home.initiatives.gd300.viewDetails",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "home.initiatives.intrepid.title",
    defaultTitle: "Intrepid List",
    yearKey: "home.initiatives.intrepid.year",
    defaultYear: "2025",
    hook: "home.initiatives.intrepid.hook",
    defaultHook: "Defending Democracy through Dedicated Capital.",
    description: "home.initiatives.intrepid.desc",
    defaultDescription: "Three years of tracking the principled investors supporting and securing democracy. Now including private equity, this is the ledger of the funds deploying billions in defense of democracy. This list served as the architectural basis for the Department of War's AFWERX venture matching strategy.",
    metrics: [
      { key: "home.initiatives.intrepid.metric.1", defaultContent: "Clean Capital Certified" },
      { key: "home.initiatives.intrepid.metric.2", defaultContent: "VC & Private Equity" },
      { key: "home.initiatives.intrepid.metric.3", defaultContent: "3rd Annual Edition" }
    ],
    link: "/intrepid-investors",
    viewDetails: "home.initiatives.intrepid.viewDetails",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const threatIntelligence = [
  {
    title: "home.initiatives.rubicon.title",
    defaultTitle: "The Rubicon Report",
    subtitle: "home.initiatives.rubicon.subtitle",
    defaultSubtitle: "A $146 Billion Problem",
    description: "home.initiatives.rubicon.desc",
    defaultDescription: "We exposed the capital fueling China's dominance in biology, cybersecurity, UAVs, and semiconductors. Our seminal investigation uncovered how U.S. universities and state pensions funneled billions into Chinese military-civil fusion.",
    cta: "home.initiatives.rubicon.cta",
    defaultCta: "Read the Report That Changed the Policy Conversation",
    link: "/research",
    icon: <AlertTriangle className="w-6 h-6" />,
  },
  {
    title: "home.initiatives.decoupling.title",
    defaultTitle: "Decoupling & Separation Index",
    yearKey: "home.initiatives.decoupling.year",
    defaultYear: "2025",
    subtitle: "home.initiatives.decoupling.subtitle",
    defaultSubtitle: "The Separation Scorecard",
    description: "home.initiatives.decoupling.desc",
    defaultDescription: "Economic separation is a requirement to ensure democracy's geopolitical supremacy. In our 3rd annual report, we audited the S&P 500 to track the companies that have taken action, severing ties with Russia and China.",
    metrics: [
      { key: "home.initiatives.decoupling.metric.1", defaultContent: "Leaders: Verizon, Cardinal Health" },
      { key: "home.initiatives.decoupling.metric.2", defaultContent: "See who scored an F" }
    ],
    cta: "home.initiatives.decoupling.cta",
    defaultCta: "Download the Scorecard",
    link: "/decoupling-index",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const humanCapital = [
  {
    title: "home.initiatives.fellows.title",
    defaultTitle: "The Fellows",
    yearKey: "home.initiatives.fellows.year",
    defaultYear: "2025",
    hook: "home.initiatives.fellows.hook",
    defaultHook: "The Technological Wizards.",
    description: "home.initiatives.fellows.desc",
    defaultDescription: "The 2025 cohort is our largest yet—linking private sector leaders with government stewards and elected representatives to offer technology insights. We are facilitating credible, capable overlap at the intersection of tech and policy.",
    cta: "home.initiatives.fellows.cta",
    defaultCta: "Meet the Cohort",
    link: "/fellows-2025",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "home.initiatives.veterans.title",
    defaultTitle: "Veterans Transparency Index",
    yearKey: "home.initiatives.veterans.year",
    defaultYear: "2025",
    hook: "home.initiatives.veterans.hook",
    defaultHook: "The Definitive Transparency Ranking.",
    description: "home.initiatives.veterans.desc",
    defaultDescription: "We honor the 30 companies that go beyond marketing placards. Our 4th edition is the definitive transparency ranking designed to highlight the companies providing transparent, high-retention career paths for our transitioning military community.",
    cta: "home.initiatives.veterans.cta",
    defaultCta: "View the Ranking",
    link: "/veteran-employers",
    icon: <FileText className="w-6 h-6" />,
  },
];

export const Initiatives = () => {
  return (
    <section id="initiatives" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* THE SPLIT SCREEN - Builders Section */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">
              <EditableText name="home.initiatives.split.label" defaultContent="The Split Screen" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
              <EditableText name="home.initiatives.builders.title" defaultContent="The Builders" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {buildersInitiatives.map((initiative, index) => (
              <BuilderCard key={initiative.title} {...initiative} index={index} />
            ))}
          </div>
        </div>

        {/* The Funders Section */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">
              <EditableText name="home.initiatives.threat.label" defaultContent="Threat Intelligence" />
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-foreground tracking-wide">
              <EditableText
                name="home.initiatives.threat.quote"
                defaultContent='"We do not just track the solution; we expose the liability."'
              />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {threatIntelligence.map((item, index) => (
              <ThreatCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Human Capital Section */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">
              <EditableText name="home.initiatives.human.label" defaultContent="Human Capital" />
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-foreground tracking-wide">
              <EditableText name="home.initiatives.human.title" defaultContent="The Next Generation" />
            </h2>
            <p className="mt-4 text-xl text-muted-foreground italic">
              <EditableText
                name="home.initiatives.human.quote"
                defaultContent='"The software is code. The hardware is steel. The driver is talent."'
              />
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {humanCapital.map((item, index) => (
              <HumanCapitalCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BuilderCardProps {
  title: string;
  defaultTitle: string;
  yearKey: string;
  defaultYear: string;
  hook: string;
  defaultHook: string;
  description: string;
  defaultDescription: string;
  metrics: { key: string; defaultContent: string }[];
  link: string;
  viewDetails: string;
  icon: React.ReactNode;
  index: number;
}

const BuilderCard = ({ title, defaultTitle, yearKey, defaultYear, hook, defaultHook, description, defaultDescription, metrics, link, viewDetails, icon, index }: BuilderCardProps) => {
  return (
    <Link
      to={link}
      className={`group relative p-8 bg-card border border-border hover:border-gold transition-all duration-500 block animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
            <EditableText name={yearKey} defaultContent={defaultYear} />
          </span>
          <div className="text-gold">{icon}</div>
        </div>

        <h3 className="text-2xl font-display text-foreground mb-2 group-hover:text-gold transition-colors">
          <EditableText name={title} defaultContent={defaultTitle} />
        </h3>
        <p className="text-gold font-semibold italic mb-4">
          <EditableText name={hook} defaultContent={`"${defaultHook}"`} />
        </p>
        <div className="text-muted-foreground text-sm leading-relaxed mb-6">
          <EditableText name={description} defaultContent={defaultDescription} multiline={true} />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {metrics.map((metric) => (
            <span key={metric.key} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              <EditableText name={metric.key} defaultContent={metric.defaultContent} />
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wide">
          <EditableText name={viewDetails} defaultContent="View Details" />
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

interface ThreatCardProps {
  title: string;
  defaultTitle: string;
  subtitle: string;
  defaultSubtitle: string;
  yearKey?: string;
  defaultYear?: string;
  description: string;
  defaultDescription: string;
  metrics?: { key: string; defaultContent: string }[];
  cta: string;
  defaultCta: string;
  link: string;
  icon: React.ReactNode;
  index: number;
}

const ThreatCard = ({ title, defaultTitle, subtitle, defaultSubtitle, yearKey, defaultYear, description, defaultDescription, metrics, cta, defaultCta, link, icon, index }: ThreatCardProps) => {
  return (
    <Link
      to={link}
      className={`group relative p-8 bg-card border border-border hover:border-gold transition-all duration-500 block animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          {yearKey && defaultYear && (
            <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
              <EditableText name={yearKey} defaultContent={defaultYear} />
            </span>
          )}
          <div className="text-gold">{icon}</div>
        </div>

        <h3 className="text-xl font-display text-foreground mb-1 group-hover:text-gold transition-colors">
          <EditableText name={title} defaultContent={defaultTitle} />
        </h3>
        <p className="text-foreground font-semibold mb-4">
          <EditableText name={subtitle} defaultContent={defaultSubtitle} />
        </p>
        <div className="text-muted-foreground text-sm leading-relaxed mb-6">
          <EditableText name={description} defaultContent={defaultDescription} multiline={true} />
        </div>

        {metrics && (
          <div className="flex flex-wrap gap-2 mb-6">
            {metrics.map((metric) => (
              <span key={metric.key} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                <EditableText name={metric.key} defaultContent={metric.defaultContent} />
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wide">
          <EditableText name={cta} defaultContent={defaultCta} />
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

interface HumanCapitalCardProps {
  title: string;
  defaultTitle: string;
  yearKey: string;
  defaultYear: string;
  hook: string;
  defaultHook: string;
  description: string;
  defaultDescription: string;
  cta: string;
  defaultCta: string;
  link: string;
  icon: React.ReactNode;
  index: number;
}

const HumanCapitalCard = ({ title, defaultTitle, yearKey, defaultYear, hook, defaultHook, description, defaultDescription, cta, defaultCta, link, icon, index }: HumanCapitalCardProps) => {
  return (
    <Link
      to={link}
      className={`group relative p-8 bg-card border border-border hover:border-gold transition-all duration-500 block animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
            <EditableText name={yearKey} defaultContent={defaultYear} />
          </span>
          <div className="text-gold">{icon}</div>
        </div>

        <h3 className="text-xl font-display text-foreground mb-2 group-hover:text-gold transition-colors">
          <EditableText name={title} defaultContent={defaultTitle} />
        </h3>
        <p className="text-gold font-semibold italic mb-4">
          <EditableText name={hook} defaultContent={`"${defaultHook}"`} />
        </p>
        <div className="text-muted-foreground text-sm leading-relaxed mb-6">
          <EditableText name={description} defaultContent={defaultDescription} multiline={true} />
        </div>

        <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wide">
          <EditableText name={cta} defaultContent={defaultCta} />
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
