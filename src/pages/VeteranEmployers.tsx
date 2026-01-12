import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const employers = [
  { rank: 1, name: "CVS Health" },
  { rank: 2, name: "Fiserv" },
  { rank: 3, name: "AT&T" },
  { rank: 4, name: "The Home Depot" },
  { rank: 5, name: "JPMorganChase" },
  { rank: 6, name: "Capital One" },
  { rank: 7, name: "Starbucks" },
  { rank: 8, name: "Verizon" },
  { rank: 9, name: "Alphabet/Google" },
  { rank: 10, name: "Bank of America" },
  { rank: 11, name: "Mastercard" },
  { rank: 12, name: "Walmart" },
  { rank: 13, name: "Amazon" },
  { rank: 14, name: "Charter Communications" },
  { rank: 15, name: "Fox Corporation" },
  { rank: 16, name: "Comcast/NBCUniversal" },
  { rank: 17, name: "Johnson & Johnson" },
  { rank: 18, name: "Liberty Mutual Insurance" },
  { rank: 19, name: "Citi" },
  { rank: 20, name: "Intel" },
  { rank: 21, name: "BlackRock" },
  { rank: 22, name: "American Airlines" },
  { rank: 23, name: "Morgan Stanley" },
  { rank: 24, name: "McKinsey & Company" },
  { rank: 25, name: "Goldman Sachs" },
  { rank: 26, name: "United Airlines" },
  { rank: 27, name: "Wells Fargo" },
  { rank: 28, name: "Nike" },
  { rank: 29, name: "Procter & Gamble" },
  { rank: 30, name: "Boston Consulting Group" },
];

const VeteranEmployers = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <span className="text-gold font-semibold uppercase tracking-widest text-sm">
            Human Capital
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            Veterans Transparency Index 2025
          </h1>
          <p className="mt-4 text-2xl text-gold font-semibold italic">
            "The Definitive Transparency Ranking."
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            We honor the 30 companies that go beyond marketing placards. Our 4th edition is the 
            definitive transparency ranking designed to highlight the companies providing transparent, 
            high-retention career paths for our transitioning military community.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
              Actions, Not Slogans
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p className="text-lg text-foreground font-medium">
                "The software is code. The hardware is steel. The driver is talent."
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                We set out to create a listing of the very best private sector companies employing veterans. We wanted a list where voluntary self-reporting does not confer an honorary presumption of inclusion akin to a "gold star" for participation, instead the metric should be public disclosure, transparent for all to review. Our index is an attempt to identify, elevate, and recognize only the truly notable veteran-hiring companies that distinguish themselves beyond that of their peers.
              </p>

              <p>
                That is why we are proud to announce our third annual Top Veteran Employers' ranking that highlights the private sector companies that both elevate veterans and provide statistics to back up employers' actions. There is much more to do, but our goal remains the same, to democratize the success and achievement of the companies that go beyond their peers in helping veterans reach their potential.
              </p>

              <p>
                In our ranking, Future Union decided to take a different approach to other evaluators. We started by evaluating more than 1,000 of the largest employers, evaluating them on an equal baseline methodological framework that was intended to be distinctly different from other private, self-reported survey-based methodologies. We live in a world of competition, why not bring it to rankings on transparency and action?
              </p>

              <p>
                While our list could have been far longer, and many companies came close to making the list, we wanted a tight, consolidated view of the top employers and competition for our 30 honorees, instead of a broad list.
              </p>

              <p>
                Future Union is proud to announce a list of veteran employers that adds a transparency element to our systematic, rigorous quantitative-ranking methodology conducted on year-end 2023 regulatory filings and other published corporate reports. Thus, our evaluation combines published metrics with firm-specific, transparency elements. Our ranking is editorially-independent and serves to highlight the best corporate efforts to recruit, teach, and empower current and former service members, spouses, and their families with certifiable data supporting action.
              </p>
            </div>

            <h3 className="font-display text-2xl text-foreground tracking-wide mb-8">
              The following are the honorees of our 4th annual top-tier employers for veterans:
            </h3>
          </div>

          {/* Employers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
            {employers.map((employer, index) => (
              <div
                key={employer.rank}
                className={`p-6 bg-card border border-border hover:border-gold/50 transition-all duration-300 animate-fade-up opacity-0`}
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <span className="text-gold font-display text-3xl">({employer.rank})</span>
                <h4 className="mt-2 text-foreground font-semibold text-lg">{employer.name}</h4>
              </div>
            ))}
          </div>

          {/* Methodology Section */}
          <div className="max-w-4xl">
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                As a general note, we acknowledge that many employers are heavily associated with the US government, thus, we set out to identify the firms that did not have a regulatory requirement for enhanced veteran disclosures to comply. Our goal is improve the trajectory of reporting in the private sector, thus, we have actively chosen to exclude companies with significant linkages to government contracts. As such companies that are the recipient of government funding over over a specific threshold are subjects to greater disclosure requirements – yet only to the government, not to the general public. That is not to detract from their work with veterans, it is simply that most of these companies already have an incentive to cater to veterans and already do a tremendous job. Our aim was to create a new ranking methodology strictly for the private sector firms that do not have such a requirement and absent the confidentiality element embedded in many survey-based disclosure.
              </p>

              <p>
                We have intentionally chosen to exclude the most obvious government, private and public companies that already do an admirable, or better, job of recruiting, hiring, and supporting veterans in favor of the other companies that are not captive to such required reporting requirements and exemplify the best of their industries. Our goal is to showcase the employers shifting the conversation toward greater, transparent disclosure. Thus, our list tends to encompass larger private sector, Fortune 500 publicly reporting companies as they tend to have greater disclosure and deserve both recognition for their work in the veteran community as well as the public credit for their historical record of transparency beyond their peers.
              </p>
            </div>

            <h3 className="font-display text-2xl text-foreground tracking-wide mb-6">
              Policy Recommendations
            </h3>

            <p className="text-muted-foreground mb-4">
              Thus, our policy recommendations for public (and private) employers to be competitive on future rankings are:
            </p>

            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Detailed, veteran-specific breakouts of data with specific historical trends and a section dedicated to veterans.</li>
              <li>Identification of veteran-specific Employee Resource Groups or Business Resource Groups and allies, as well as the number of members as a percentage of total employees.</li>
              <li>Retention rates of veterans in relation to both veteran and total employee counts.</li>
              <li>Disclosure of the dollar amount of annual grants and/or donations.</li>
              <li>Disclosure of events hosted throughout the year which are designed to identify high achieving veteran successes, both sponsored and internally developed.</li>
              <li>Programs available and specifically designed for veterans.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VeteranEmployers;