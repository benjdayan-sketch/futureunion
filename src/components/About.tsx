import { Shield, Globe, Zap } from "lucide-react";
import { EditableText } from "@/components/cms/EditableText";


export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">
            <EditableText name="home.about.label" defaultContent="The Allied Collective" />
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            <EditableText name="home.about.title" defaultContent="Auditor & Architect" />
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <EditableText
              name="home.about.description"
              multiline={true}
              defaultContent="The international rules-based order is fracturing under the weight of market manipulation and unfettered economic statecraft. Future Union serves as the auditor and architect of a nexus of allied capital and technological innovation."
            />
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="home.about.card1.title"
            defaultTitle="Counter Economic Statecraft"
            description="home.about.card1.description"
            defaultDescription="To counter anti-rule of law actors intent on distorting free markets and undermining the international order, we forge an allied coalition working in unison."
            delay="delay-100"
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title="home.about.card2.title"
            defaultTitle="Bridge Innovation & Security"
            description="home.about.card2.description"
            defaultDescription="We bridge the gap between private sector innovation and national security to ensure the free world remains the vanguard of global commerce."
            delay="delay-200"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="home.about.card3.title"
            defaultTitle="Capital Markets Resilience"
            description="home.about.card3.description"
            defaultDescription="Capital markets are the core engine of resilience. We facilitate capital flows into technologies that are critical for global stability."
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  defaultTitle: string;
  description: string;
  defaultDescription: string;
  delay: string;
}

const FeatureCard = ({ icon, title, defaultTitle, description, defaultDescription, delay }: FeatureCardProps) => {
  return (
    <div className={`group p-8 bg-card border border-border hover:border-gold/50 transition-all duration-500 animate-fade-up opacity-0 ${delay}`}>
      <div className="w-16 h-16 flex items-center justify-center bg-gold/10 text-gold mb-6 group-hover:bg-gold group-hover:text-primary-foreground dark:group-hover:text-navy transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4">
        <EditableText name={title} defaultContent={defaultTitle} />
      </h3>
      <div className="text-muted-foreground leading-relaxed">
        <EditableText name={description} defaultContent={defaultDescription} multiline={true} />
      </div>
    </div>
  );
};
