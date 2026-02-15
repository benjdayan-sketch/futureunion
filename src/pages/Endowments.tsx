import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, AlertTriangle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";

const endowmentData = [
  {
    state: "California", endowments: [
      { name: "California Institute of Technology Endowment", aum: "$4.2 billion", rank: 37, investments: 2, lastCommitment: "2008" },
      { name: "Claremont McKenna College Endowment", aum: "$1.2 billion", rank: 116, investments: 3, lastCommitment: "2007" },
      { name: "Pomona College Endowment", aum: "$3.0 billion", rank: 49, investments: 5, lastCommitment: "2017" },
      { name: "Santa Clara University Endowment", aum: "$1.5 billion", rank: 96, investments: 3, lastCommitment: "2007" },
      { name: "Stanford Management Company", aum: "$40.1 billion", rank: 7, investments: 12, lastCommitment: "2014" },
    ]
  },
  {
    state: "Connecticut", endowments: [
      { name: "Yale University Endowment", aum: "$42.2 billion", rank: 6, investments: 6, lastCommitment: "2015" },
    ]
  },
  {
    state: "Georgia", endowments: [
      { name: "Emory University", aum: "$10.0 billion", rank: 22, investments: 3, lastCommitment: "2013" },
    ]
  },
  {
    state: "Illinois", endowments: [
      { name: "Loyola University - Chicago", aum: "$1.3 billion", rank: 107, investments: 1, lastCommitment: "2012" },
      { name: "Northwestern University Endowment", aum: "$10.9 billion", rank: 20, investments: 4, lastCommitment: "2011" },
      { name: "University of Chicago Endowment", aum: "$8.5 billion", rank: 24, investments: 7, lastCommitment: "2015" },
    ]
  },
  {
    state: "Indiana", endowments: [
      { name: "The Notre Dame Endowment", aum: "$20.8 billion", rank: 12, investments: 3, lastCommitment: "2011" },
    ]
  },
  {
    state: "Iowa", endowments: [
      { name: "Grinnell College Endowment", aum: "$2.5 billion", rank: 60, investments: 4, lastCommitment: "2015" },
      { name: "University of Iowa Center for Advancement", aum: "$1.4 billion", rank: 99, investments: 2, lastCommitment: "2014" },
    ]
  },
  {
    state: "Louisiana", endowments: [
      { name: "Univ. of Louisiana Foundation/Univ. of Louisiana at Lafayette Foundation", aum: "$1.4 billion", rank: 105, investments: 5, lastCommitment: "2015" },
    ]
  },
  {
    state: "Maryland", endowments: [
      { name: "University System of Maryland Foundation", aum: "$0.4 billion", rank: 117, investments: 2, lastCommitment: "2006" },
    ]
  },
  {
    state: "Massachusetts", endowments: [
      { name: "Amherst College Endowment", aum: "$3.3 billion", rank: 42, investments: 3, lastCommitment: "2008" },
      { name: "Dartmouth College Endowment", aum: "$8.1 billion", rank: 27, investments: 2, lastCommitment: "2012" },
      { name: "Harvard Management Company", aum: "$50.9 billion", rank: 5, investments: 7, lastCommitment: "2011" },
      { name: "Massachusetts Institute of Technology", aum: "$24.7 billion", rank: 7, investments: 6, lastCommitment: "2016" },
      { name: "MITIMCo/MIT Basic Retirement Plan", aum: "N/A", investments: 7, lastCommitment: "Unknown" },
      { name: "Mount Holyoke College Endowment", aum: "$1.1 billion", rank: 128, investments: 2, lastCommitment: "2007" },
      { name: "Wellesley College Endowment", aum: "$3.2 billion", rank: 43, investments: 5, lastCommitment: "2015" },
    ]
  },
  {
    state: "Michigan", endowments: [
      { name: "Regents of the University of Michigan", aum: "N/A", investments: 2, lastCommitment: "Unknown" },
    ]
  },
];

const Endowments = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Endowments"
        description="University Endowments Record of Investing in Adversarial Countries. Examining university endowment investments in foreign adversarial entities."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <span className="text-gold font-semibold uppercase tracking-widest text-sm">
            <EditableText name="endowments.hero.label" defaultContent="Conflict Capital" />
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            <EditableText name="endowments.hero.title" defaultContent="Endowments" />
          </h1>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
            <EditableText name="endowments.stats.title" defaultContent="University Endowments Record of Investing in Adversarial Countries" />
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            <EditableText name="endowments.stats.subtitle" defaultContent="Below is the historical record of university endowment investments in the listed countries." />
          </p>

          <div className="bg-card border border-border p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-gold flex-shrink-0" />
              <h3 className="font-display text-2xl text-foreground"><EditableText name="endowments.insights.title" defaultContent="Insights on University Endowments" /></h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <EditableText name="endowments.insights.p1" multiline defaultContent="Major university endowments across the United States have historically invested in funds with ties to adversarial countries, including China and Hong Kong. These investments span some of the nation's most prestigious institutions, from Ivy League universities to leading research institutions." />
              </p>
              <p>
                <EditableText name="endowments.insights.p2" multiline defaultContent="While endowments face less stringent disclosure requirements than public pensions, the available data reveals a pattern of investment in regions that present potential conflicts with democratic values and national security interests." />
              </p>
              <p>
                <EditableText name="endowments.insights.p3" multiline defaultContent="The lack of transparency in endowment reporting makes comprehensive assessment challenging, but the documented investments represent a significant allocation of educational resources to potentially adversarial economies." />
              </p>
            </div>
          </div>

          <div className="bg-muted/50 border border-border p-6 mb-12 text-sm text-muted-foreground">
            <p className="font-semibold mb-2"><EditableText name="endowments.disclaimer.label" defaultContent="Disclaimer:" /></p>
            <p>
              <EditableText name="endowments.disclaimer.text" multiline defaultContent="The information is derived from publicly available sources and private databases but significantly underreports the scope and scale of the issue. University endowments face limited disclosure requirements, and the actual extent of investments in adversarial countries is likely substantially higher than reported figures indicate." />
            </p>
          </div>
        </div>
      </section>

      {/* State by State Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
            <EditableText name="endowments.list.title" defaultContent="University Endowments that have made investment commitments to funds in adversarial countries" />
          </h2>
          <p className="text-muted-foreground mb-12">
            <EditableText name="endowments.list.subtitle" defaultContent="The following are listed by State and Assets Under Management:" />
          </p>

          <div className="space-y-8">
            {endowmentData.map((stateData) => (
              <div key={stateData.state} className="bg-card border border-border p-6">
                <h3 className="font-display text-2xl text-gold mb-4">{stateData.state}</h3>
                <div className="space-y-4">
                  {stateData.endowments.map((endowment) => (
                    <div key={endowment.name} className="border-l-2 border-gold/30 pl-4">
                      <h4 className="font-semibold text-foreground">{endowment.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        AUM: {endowment.aum} {endowment.rank && `/ Rank #${endowment.rank}`}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        The university has made a total of at least {endowment.investments} investment{endowment.investments > 1 ? 's' : ''}, with the latest reported commitment in {endowment.lastCommitment}, which underreports – likely significantly – the total figures given the limited disclosure required.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* States with insufficient info */}
            <div className="bg-card border border-border p-6">
              <h3 className="font-display text-2xl text-muted-foreground mb-4"><EditableText name="endowments.other.title" defaultContent="Other States" /></h3>
              <p className="text-muted-foreground text-sm">
                <EditableText name="endowments.other.text" multiline defaultContent="Publicly-available information is insufficient to determine if any universities in the following states have invested in adversarial countries: Alabama, Alaska, Arizona, Arkansas, Colorado, Delaware, Florida, Hawaii, Idaho, Kansas, Kentucky, Maine, and others." />
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Endowments;