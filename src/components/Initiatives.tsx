import { ArrowRight, Shield, TrendingUp, Users, FileText, AlertTriangle, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const buildersInitiatives = [
  {
    title: "Global Defense 300",
    year: "2025",
    hook: "The Shield Must Be Shared.",
    description: "The free world prevails only if the Arsenal of Democracy is global. We stripped away the marketing hype to grade the top companies on a single metric: ability to solve National Security Challenges. 300 companies—from Paris to Seoul—developing the capabilities the Alliance needs.",
    metrics: ["300 Companies", "Global Reach", "Solutions delivered, not funds raised"],
    link: "/global-defense-300",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Intrepid List",
    year: "2025",
    hook: "Defending Democracy through Dedicated Capital.",
    description: "Three years of tracking the principled investors supporting and securing democracy. Now including private equity, this is the ledger of the funds deploying billions in defense of democracy. This list served as the architectural basis for the Department of War's AFWERX venture matching strategy.",
    metrics: ["Clean Capital Certified", "VC & Private Equity", "3rd Annual Edition"],
    link: "/intrepid-investors",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const threatIntelligence = [
  {
    title: "The Rubicon Report",
    subtitle: "A $146 Billion Problem",
    description: "We exposed the capital fueling China's dominance in biology, cybersecurity, UAVs, and semiconductors. Our seminal investigation uncovered how U.S. universities and state pensions funneled billions into Chinese military-civil fusion.",
    cta: "Read the Report That Changed the Policy Conversation",
    link: "/research",
    icon: <AlertTriangle className="w-6 h-6" />,
  },
  {
    title: "Decoupling & Separation Index",
    year: "2025",
    subtitle: "The Separation Scorecard",
    description: "Economic separation is a requirement to ensure democracy's geopolitical supremacy. In our 3rd annual report, we audited the S&P 500 to track the companies that have taken action, severing ties with Russia and China.",
    metrics: ["Leaders: Verizon, Cardinal Health", "See who scored an F"],
    cta: "Download the Scorecard",
    link: "/decoupling-index",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const humanCapital = [
  {
    title: "The Fellows",
    year: "2025",
    hook: "The Technological Wizards.",
    description: "The 2025 cohort is our largest yet—linking private sector leaders with government stewards and elected representatives to offer technology insights. We are facilitating credible, capable overlap at the intersection of tech and policy.",
    cta: "Meet the Cohort",
    link: "/fellows-2025",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Veterans Transparency Index",
    year: "2025",
    hook: "The Definitive Transparency Ranking.",
    description: "We honor the 30 companies that go beyond marketing placards. Our 4th edition is the definitive transparency ranking designed to highlight the companies providing transparent, high-retention career paths for our transitioning military community.",
    cta: "View the Ranking",
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
              The Split Screen
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
              The Builders
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
              Threat Intelligence
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-foreground tracking-wide">
              "We do not just track the solution; we expose the liability."
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
              Human Capital
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-foreground tracking-wide">
              The Next Generation
            </h2>
            <p className="mt-4 text-xl text-muted-foreground italic">
              "The software is code. The hardware is steel. The driver is talent."
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
  year: string;
  hook: string;
  description: string;
  metrics: string[];
  link: string;
  icon: React.ReactNode;
  index: number;
}

const BuilderCard = ({ title, year, hook, description, metrics, link, icon, index }: BuilderCardProps) => {
  return (
    <Link 
      to={link}
      className={`group relative p-8 bg-card border border-border hover:border-gold transition-all duration-500 block animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
            {year}
          </span>
          <div className="text-gold">{icon}</div>
        </div>
        
        <h3 className="text-2xl font-display text-foreground mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-gold font-semibold italic mb-4">"{hook}"</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {metrics.map((metric) => (
            <span key={metric} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              {metric}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wide">
          View Details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

interface ThreatCardProps {
  title: string;
  subtitle: string;
  year?: string;
  description: string;
  metrics?: string[];
  cta: string;
  link: string;
  icon: React.ReactNode;
  index: number;
}

const ThreatCard = ({ title, subtitle, year, description, metrics, cta, link, icon, index }: ThreatCardProps) => {
  return (
    <Link 
      to={link}
      className={`group relative p-8 bg-card border border-border hover:border-gold transition-all duration-500 block animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          {year && (
            <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
              {year}
            </span>
          )}
          <div className="text-gold">{icon}</div>
        </div>
        
        <h3 className="text-xl font-display text-foreground mb-1 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-foreground font-semibold mb-4">{subtitle}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        {metrics && (
          <div className="flex flex-wrap gap-2 mb-6">
            {metrics.map((metric) => (
              <span key={metric} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {metric}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wide">
          {cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

interface HumanCapitalCardProps {
  title: string;
  year: string;
  hook: string;
  description: string;
  cta: string;
  link: string;
  icon: React.ReactNode;
  index: number;
}

const HumanCapitalCard = ({ title, year, hook, description, cta, link, icon, index }: HumanCapitalCardProps) => {
  return (
    <Link 
      to={link}
      className={`group relative p-8 bg-card border border-border hover:border-gold transition-all duration-500 block animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
            {year}
          </span>
          <div className="text-gold">{icon}</div>
        </div>
        
        <h3 className="text-xl font-display text-foreground mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-gold font-semibold italic mb-4">"{hook}"</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wide">
          {cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
