import { ArrowRight } from "lucide-react";

export const Mission = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">
            The Mission
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide leading-tight">
            Market-Led National Security
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="animate-slide-in-left opacity-0">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Future Union is a nonpartisan organization dedicated to a new era of Market-led national security. We define <strong className="text-foreground">National Security Investing (NSI)</strong> as an asset class devoted to strengthening the international rules-based order.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Democracy can no longer exist simply to promote capitalism; capitalism must be a force for democracy. By developing novel financial tools and sharpening collective insights, we facilitate capital flows into technologies that are critical for global stability.
            </p>
            <p className="text-lg text-foreground font-semibold">
              The private sector must take the lead.
            </p>
            
            <a 
              href="#initiatives" 
              className="inline-flex items-center gap-2 mt-8 text-gold font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all"
            >
              Explore the Investment Thesis
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Quote */}
          <div className="animate-slide-in-right opacity-0 delay-200">
            <blockquote className="relative p-8 md:p-12 bg-card border border-border">
              <div className="absolute -top-4 left-8 text-gold text-8xl font-serif opacity-30">"</div>
              <p className="relative text-xl md:text-2xl text-foreground font-light leading-relaxed italic">
                Capital markets are the core engine of resilience. To counter anti-rule of law actors intent on distorting free markets, our mission is forging an allied coalition of private sector leaders, investors and executives to work in unison.
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gold"></div>
                <span className="text-gold font-semibold uppercase tracking-wide text-sm">
                  Future Union
                </span>
              </footer>
            </blockquote>
            
            <p className="mt-8 text-muted-foreground leading-relaxed">
              We bridge the gap between private sector innovation and national security to ensure the free world remains the vanguard of global commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
