import heroImage from "@/assets/hero-flags.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient flow */}
      <div className="absolute inset-0 bg-gradient-flow" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Background Image with overlay */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40">
        <img
          src={heroImage}
          alt="American flags waving with golden sunlight"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo-style title */}
        <div className="animate-fade-up opacity-0">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-foreground inline-flex items-center justify-center">
            <span>FUTURE</span>
            <span className="w-4 md:w-6 h-1 bg-gold mx-1 md:mx-2"></span>
            <span>UNION</span>
          </h1>
        </div>
        
        {/* New tagline from document */}
        <h2 className="mt-6 md:mt-8 font-display text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-wider animate-fade-up opacity-0 delay-100">
          Securing the Next Allied Century.
        </h2>
        
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-light animate-fade-up opacity-0 delay-200 leading-relaxed">
          At a pivotal geopolitical inflection point, Future Union serves as the premier nexus for convening the allied collective. We serve as the auditor and architect of a nexus of allied capital and technological innovation.
        </p>

        <div className="mt-12 animate-fade-up opacity-0 delay-400">
          <a
            href="#mission"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join the Mission
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
