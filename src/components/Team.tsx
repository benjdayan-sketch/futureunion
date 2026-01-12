import { Linkedin } from "lucide-react";

export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up opacity-0">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
              Collective Expertise
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprised of a group with diverse industry experiences, Future Union 
                is led by venture capitalist <span className="text-gold font-semibold">Andrew King</span>, 
                with the chief strength being the power of the collective knowledge of the broader team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team includes private equity investors, corporate leaders (CEOs, CMOs, CISOs), 
                foreign policy experts, national security lawyers, and current and former elected 
                government and national security leaders.
              </p>
              <a
                href="https://www.linkedin.com/in/andrewcharlesking/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
              >
                <Linkedin className="w-5 h-5" />
                Connect with Andrew King
              </a>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-up opacity-0 delay-200">
            <StatCard number="100+" label="Team Members" />
            <StatCard number="50+" label="Industry Leaders" />
            <StatCard number="Bipartisan" label="Approach" isText />
            <StatCard number="Self-Funded" label="Initiative" isText />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  number: string;
  label: string;
  isText?: boolean;
}

const StatCard = ({ number, label, isText }: StatCardProps) => {
  return (
    <div className="p-8 bg-card border border-border text-center group hover:border-gold/50 transition-all duration-300">
      <div className={`font-display ${isText ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"} text-gold tracking-wide`}>
        {number}
      </div>
      <div className="mt-2 text-muted-foreground uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};