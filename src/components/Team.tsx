import { Linkedin } from "lucide-react";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";


export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up opacity-0">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">
              <EditableText name="home.team.label" defaultContent="Leadership" />
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
              <EditableText name="home.team.title" defaultContent="Collective Expertise" />
            </h2>
            <div className="mt-8 space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <EditableText
                  name="home.team.p1"
                  multiline={true}
                  defaultContent="Comprised of a group with diverse industry experiences, Future Union is led by venture capitalist **Andrew King**, with the chief strength being the power of the collective knowledge of the broader team."
                />
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <EditableText
                  name="home.team.p2"
                  multiline={true}
                  defaultContent="Our team includes private equity investors, corporate leaders (CEOs, CMOs, CISOs), foreign policy experts, national security lawyers, and current and former elected government and national security leaders."
                />
              </div>
              <EditableLink
                name="home.team.connect.text"
                linkName="home.team.connect.href"
                defaultContent="Connect with Andrew King"
                defaultHref="https://www.linkedin.com/in/andrewcharlesking/"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
              >
                <Linkedin className="w-5 h-5" />
              </EditableLink>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-up opacity-0 delay-200">
            <StatCard
              number="home.team.stat1.number" defaultNumber="100+"
              label="home.team.stat1.label" defaultLabel="Team Members"
            />
            <StatCard
              number="home.team.stat2.number" defaultNumber="50+"
              label="home.team.stat2.label" defaultLabel="Industry Leaders"
            />
            <StatCard
              number="home.team.stat3.number" defaultNumber="Bipartisan"
              label="home.team.stat3.label" defaultLabel="Approach" isText
            />
            <StatCard
              number="home.team.stat4.number" defaultNumber="Self-Funded"
              label="home.team.stat4.label" defaultLabel="Initiative" isText
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  number: string;
  defaultNumber: string;
  label: string;
  defaultLabel: string;
  isText?: boolean;
}

const StatCard = ({ number, defaultNumber, label, defaultLabel, isText }: StatCardProps) => {
  return (
    <div className="p-8 bg-card border border-border text-center group hover:border-gold/50 transition-all duration-300">
      <div className={`font-display ${isText ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"} text-gold tracking-wide`}>
        <EditableText name={number} defaultContent={defaultNumber} />
      </div>
      <div className="mt-2 text-muted-foreground uppercase tracking-wider text-sm">
        <EditableText name={label} defaultContent={defaultLabel} />
      </div>
    </div>
  );
};