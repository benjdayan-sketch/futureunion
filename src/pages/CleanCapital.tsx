import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, CheckCircle, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const CleanCapital = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Clean Capital Certification"
        description="Allied Capital. Verified. In a competition where capital is a strategic instrument, verification is a strategic necessity."
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
            <EditableText name="cleanCapital.hero.label" defaultContent="Future Union" />
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            <EditableText name="cleanCapital.hero.title" defaultContent="Clean Capital Certification" />
          </h1>
          <p className="mt-4 text-2xl text-gold font-semibold italic">
            <EditableText name="cleanCapital.hero.subtitle" defaultContent="Allied Capital. Verified." />
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            <EditableText name="cleanCapital.hero.description" multiline defaultContent="In a Competition Where Capital Is a Strategic Instrument, Verification Is a Strategic Necessity." />
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Opening */}
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                <EditableText name="cleanCapital.opening.p1" multiline defaultContent="The redirection of Western capital toward allied security assets is one of the most urgent imperatives of this geopolitical moment. But the strategic value of that redirection is only as credible as the capital executing it." />
              </p>
              <p>
                <EditableText name="cleanCapital.opening.p2" multiline defaultContent="Not all capital is equal. Adversarially-aligned capital — operating through opaque ownership structures, sanctioned intermediaries, or entities in direct opposition to the rules-based order — has demonstrated a sustained capacity to infiltrate Western markets, distort allied investment ecosystems, and extract strategic concessions under the guise of commercial activity." />
              </p>
              <p>
                <EditableText name="cleanCapital.opening.p3" multiline defaultContent="Clean Capital Certification is Future Union's response: a rigorous, independent verification standard confirming that the capital participating in the allied investment ecosystem is transparent in origin, aligned in values, and free from adversarial influence." />
              </p>
            </div>

            {/* What It Is */}
            <div className="p-8 bg-gradient-subtle border border-border mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-gold" />
                <h3 className="font-display text-2xl text-foreground">
                  <EditableText name="cleanCapital.what.title" defaultContent="What Clean Capital Certification Is" />
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <EditableText name="cleanCapital.what.p1" multiline defaultContent="Clean Capital Certification is a geopolitical evaluation and transparency assessment of the funding sources comprising U.S. and international venture capital and private equity funds — with particular focus on the limited partner base that ultimately underlies those capital pools." />
                </p>
                <p>
                  <EditableText name="cleanCapital.what.p2" multiline defaultContent="It is not a self-reported designation. It is a verified credential — earned through independent review of ownership structure, capital provenance, and alignment with allied values and the international rules-based order." />
                </p>
                <p>
                  <EditableText name="cleanCapital.what.p3" multiline defaultContent="This is a voluntary certification. The investors who carry it have chosen to meet the standard — and in doing so, have made a public commitment to ensuring their capital serves democratic institutions rather than undermining them." />
                </p>
              </div>
            </div>

            {/* What Certified Capital Means */}
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
              <EditableText name="cleanCapital.certified.title" defaultContent="What Certified Capital Means" />
            </h2>
            <div className="space-y-4 mb-12">
              {[
                { title: "Allied in origin", desc: "Sourced from entities domiciled in and aligned with rule-of-law nations." },
                { title: "Transparent in structure", desc: "Free from opaque beneficial ownership arrangements that obscure adversarial influence." },
                { title: "LP-verified", desc: "Limited partner composition assessed for ties to nations or entities hostile to democratic values." },
                { title: "Compliant in conduct", desc: "Operating within the legal, regulatory, and ethical frameworks of the rules-based order." },
                { title: "Independently assessed", desc: "Certification is earned through external review, not self-attestation." },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why It Matters */}
            <div className="p-8 bg-gradient-subtle border border-border mb-12">
              <h3 className="font-display text-2xl text-foreground mb-4">
                <EditableText name="cleanCapital.why.title" defaultContent="Why It Matters" />
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <EditableText name="cleanCapital.why.p1" multiline defaultContent="Understanding the source of capital is no longer merely a compliance obligation. It is a national security imperative." />
                </p>
                <p>
                  <EditableText name="cleanCapital.why.p2" multiline defaultContent="Adversarial capital has proven adept at positioning itself within Western portfolios — often indirectly, often invisibly — gaining influence over critical technologies, extracting intellectual property, and undermining the very security outcomes that allied investment is designed to advance. The innovation ecosystems of the free world are at particular risk: venture and private equity structures, with their layered LP bases and international capital pools, present precisely the kind of opacity that adversarial actors have learned to exploit." />
                </p>
                <p>
                  <EditableText name="cleanCapital.why.p3" multiline defaultContent="Clean Capital Certification exists to close that gap — protecting the integrity of allied investment and ensuring that capital flowing into national security assets does not inadvertently serve the interests it is designed to counter." />
                </p>
              </div>
            </div>

            {/* Certified Investors */}
            <div className="bg-card border border-gold/30 p-8 mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-gold" />
                <h3 className="font-display text-2xl text-foreground">
                  <EditableText name="cleanCapital.investors.title" defaultContent="Certified Investors" />
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                <EditableText name="cleanCapital.investors.desc" multiline defaultContent="The following investors have voluntarily applied and been certified as having no material funding ties to nations hostile to democracy. Certification is publicly listed as a signal of commitment to allied investment integrity." />
              </p>
              <Link to="/contact" className="text-gold font-semibold uppercase tracking-wider text-sm hover:text-gold/80 transition-colors">
                View the Clean Capital Registry →
              </Link>
            </div>

            {/* How to Get Certified */}
            <div className="p-8 bg-gradient-subtle border border-border mb-8">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-gold" />
                <h3 className="font-display text-2xl text-foreground">
                  <EditableText name="cleanCapital.howto.title" defaultContent="How to Get Certified" />
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <EditableText name="cleanCapital.howto.p1" multiline defaultContent="Investment firms seeking Clean Capital Certification submit ownership, LP provenance, and compliance documentation for independent assessment against Future Union's allied capital standard. Certified entities receive a Clean Capital designation and are listed within the Future Union registry." />
                </p>
                <p className="font-semibold text-foreground">
                  <EditableText name="cleanCapital.howto.p2" defaultContent="The process is rigorous by design. The standard is meaningful because it is not easily met." />
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors text-center">
                Apply for Certification
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

export default CleanCapital;
