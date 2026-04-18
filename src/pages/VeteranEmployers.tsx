import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Award, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EditableText } from "@/components/cms/EditableText";

const employers = [
  { rank: 1, name: "Amazon" },
  { rank: 2, name: "Comcast / NBCUniversal" },
  { rank: 3, name: "JPMorganChase" },
  { rank: 4, name: "The Home Depot" },
  { rank: 5, name: "Verizon" },
  { rank: 6, name: "Cisco" },
  { rank: 7, name: "Starbucks" },
  { rank: 8, name: "Bank of America" },
  { rank: 9, name: "Oracle" },
  { rank: 10, name: "Wells Fargo" },
  { rank: 11, name: "Union Pacific" },
  { rank: 12, name: "AT&T" },
  { rank: 13, name: "HCA Healthcare" },
  { rank: 14, name: "Costco" },
  { rank: 15, name: "Deloitte" },
  { rank: 16, name: "Accenture" },
  { rank: 17, name: "General Motors" },
  { rank: 18, name: "Southwest Airlines" },
  { rank: 19, name: "Delta Air Lines" },
  { rank: 20, name: "Ford Motor Co." },
  { rank: 21, name: "Johnson & Johnson" },
  { rank: 22, name: "Salesforce" },
  { rank: 23, name: "Walmart" },
  { rank: 24, name: "Microsoft" },
  { rank: 25, name: "Capital One" },
  { rank: 26, name: "CSX" },
  { rank: 27, name: "T-Mobile" },
  { rank: 28, name: "Google (Alphabet)" },
  { rank: 29, name: "CVS Health" },
  { rank: 30, name: "Southern Company" },
];

const policyRecs = [
  { title: "Veteran-specific data breakouts", desc: "Dedicated sections with historical trends disaggregated from general workforce reporting" },
  { title: "Employee Resource Group disclosure", desc: "Identification of veteran-specific ERGs and BRGs, including membership as a percentage of total employees" },
  { title: "Retention data", desc: "Veteran retention rates reported in relation to both veteran and total employee counts" },
  { title: "Philanthropic transparency", desc: "Disclosure of annual grants, donations, and sponsorships directed toward the veteran community" },
  { title: "Program specificity", desc: "Detailed accounting of programs designed specifically for veterans, not general workforce development initiatives repurposed for veteran marketing" },
  { title: "Event documentation", desc: "Disclosure of events designed to identify and celebrate veteran achievement, both sponsored and internally developed" },
];

const VeteranEmployers = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Veterans Transparency Index — 4th Edition"
        description="The Definitive Transparency Ranking of Veteran Employment in America. Now in its fourth annual edition, evaluating more than 1,000 of the largest employers in the United States."
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
            <EditableText name="veteran.hero.label" defaultContent="The Next Generation" />
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            <EditableText name="veteran.hero.title" defaultContent="Veterans Transparency Index" />
          </h1>
          <p className="mt-4 text-2xl text-gold font-semibold italic">
            <EditableText name="veteran.hero.subtitle" defaultContent="The Definitive Transparency Ranking of Veteran Employment in America." />
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            <EditableText name="veteran.hero.description" multiline defaultContent="4th Edition — Now evaluating more than 1,000 of the largest employers in the United States against a rigorous, standardized methodology." />
          </p>
        </div>
      </section>

      {/* Opening */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                <EditableText name="veteran.opening.p1" multiline defaultContent="There is no shortage of lists claiming to honor the best veteran employers in America. Most of them are built on voluntary self-reporting — surveys that reward companies for participating rather than for performing, and that confer honorary inclusion on the basis of what companies say rather than what they have actually done." />
              </p>
              <p>
                <EditableText name="veteran.opening.p2" multiline defaultContent="The Veterans Transparency Index was built on an entirely different premise: that the only metric worth measuring is verifiable action, publicly disclosed and independently assessed. Not slogans. Not surveys. Not self-reported claims of commitment. Data — certified, transparent, and available for all to review." />
              </p>
              <p>
                <EditableText name="veteran.opening.p3" multiline defaultContent="Now in its fourth annual edition, the Index has evaluated more than 1,000 of the largest employers in the United States against a rigorous, standardized methodology — and identified the 30 companies that have distinguished themselves beyond their peers in recruiting, supporting, and advancing the careers of transitioning service members and their families." />
              </p>
            </div>

            {/* Methodology */}
            <div className="flex items-center gap-4 mb-8">
              <BarChart3 className="w-10 h-10 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                <EditableText name="veteran.methodology.title" defaultContent="The Methodology" />
              </h2>
            </div>
            <p className="text-gold font-semibold text-lg mb-4">
              <EditableText name="veteran.methodology.subtitle" defaultContent="Actions, Not Slogans." />
            </p>
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                <EditableText name="veteran.methodology.p1" multiline defaultContent="Future Union's approach was deliberate and distinct from the outset. Rather than issuing surveys and rewarding participation, we evaluated companies against a baseline methodological framework applied equally across all assessed employers — using year-end regulatory filings and publicly available corporate reports rather than firm-submitted data." />
              </p>
              <p>
                <EditableText name="veteran.methodology.p2" multiline defaultContent="The result is an editorially independent ranking that cannot be gamed by disclosure strategy, survey response, or marketing investment. Inclusion is earned by what companies have actually done and publicly reported — not by what they have chosen to tell us." />
              </p>
              <p>
                <EditableText name="veteran.methodology.p3" multiline defaultContent="One deliberate exclusion shapes the list: companies with significant government contract exposure have been removed from consideration. Government contractors already operate under enhanced veteran disclosure requirements. The Index was designed to move the private sector conversation — to identify and recognize the Fortune 500 companies for whom veteran employment is not a regulatory requirement but a genuine institutional commitment." />
              </p>
              <p className="font-semibold text-foreground">
                <EditableText name="veteran.methodology.p4" defaultContent="The Index is intentionally tight. Many companies came close. The 30 honorees represent the companies that went furthest." />
              </p>
            </div>

            {/* 2025 Honorees */}
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-10 h-10 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                <EditableText name="veteran.honorees.title" defaultContent="The 2025 Honorees" />
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <EditableText name="veteran.honorees.desc" defaultContent="The following companies are the honorees of the 4th annual Veterans Transparency Index — the private sector's most rigorous and transparent accounting of veteran employment:" />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {employers.map((employer) => (
                <div key={employer.rank} className="flex items-center gap-4 p-4 bg-card border border-border hover:border-gold/30 transition-colors">
                  <span className="font-display text-gold text-lg w-8 text-right">{employer.rank}</span>
                  <span className="text-foreground font-semibold">{employer.name}</span>
                </div>
              ))}
            </div>

            {/* Policy Recommendations */}
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
              <EditableText name="veteran.policy.title" defaultContent="Policy Recommendations" />
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <EditableText name="veteran.policy.intro" multiline defaultContent="The Index is not merely a recognition program. It is a framework for raising the floor of veteran employment transparency across the private sector. Future Union's policy recommendations for employers seeking to improve their standing on future editions:" />
            </p>
            <div className="space-y-4 mb-12">
              {policyRecs.map((rec) => (
                <div key={rec.title} className="bg-card border border-border p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{rec.title}</h3>
                      <p className="text-muted-foreground text-sm">{rec.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm italic mb-12">
              These recommendations represent the next frontier of private sector transparency — and the criteria against which future editions of the Index will increasingly assess performance.
            </p>

            {/* Closing */}
            <div className="bg-card border border-gold/30 p-8 mb-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <EditableText name="veteran.closing.p1" multiline defaultContent="There is much more to do. The goal of the Veterans Transparency Index has always been to democratize the recognition of companies that go beyond their peers — and in doing so, to raise the standard of what going beyond their peers actually requires." />
                </p>
                <p className="text-foreground font-semibold">
                  <EditableText name="veteran.closing.p2" defaultContent="The 30 companies on this list have earned their place. The question for every company that did not is straightforward: what will change before the next edition?" />
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors text-center">
                View the Full Index
              </Link>
              <Link to="/fellows-2025" className="px-8 py-3 border border-gold text-gold font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors text-center">
                Explore The Commission
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

export default VeteranEmployers;
