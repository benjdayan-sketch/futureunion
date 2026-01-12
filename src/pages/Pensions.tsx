import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const pensionData = [
  { state: "Alaska", pensions: [{ name: "Alaska Retirement Management Board", aum: "$38.6 billion", investments: 9, amount: "$54 million", lastCommitment: "2021" }] },
  { state: "Arizona", pensions: [{ name: "The Public Safety Personnel Retirement System of the State of Arizona", aum: "$17.1 billion", investments: 15, amount: "$600 million", lastCommitment: "2022" }] },
  { state: "Arkansas", pensions: [{ name: "Arkansas Teacher Retirement System", aum: "$7.6 billion", investments: 3, amount: "$110 million", lastCommitment: "2022" }] },
  {
    state: "California", pensions: [
      { name: "California Public Employees Retirement System", aum: "$468.3 billion", investments: 80, amount: "$7,866 million", lastCommitment: "2023" },
      { name: "Los Angeles County Employees' Retirement Association", aum: "$72.3 billion", investments: 24, amount: "$702 million", lastCommitment: "2023" },
      { name: "California State Teachers Retirements System", aum: "$315.6 billion", investments: 58, amount: "$5,559 million", lastCommitment: "2022" },
      { name: "San Francisco Employee Retirement", aum: "$33.5 billion", investments: 80, amount: "$3,381 million", lastCommitment: "2022" },
      { name: "Los Angeles City Employees' Retirement System", aum: "$20.8 billion", investments: 11, amount: "$266 million", lastCommitment: "2021" },
      { name: "Orange County Employees' Retirement System", aum: "$20.3 billion", investments: 3, amount: "$152 million", lastCommitment: "2021" },
      { name: "Los Angeles Fire and Police Pension System", aum: "$28.9 billion", investments: 9, amount: "$165 million", lastCommitment: "2020" },
      { name: "Los Angeles Water and Power Employees' Retirement Plan", aum: "$15.6 billion", investments: 2, amount: "$135 million", lastCommitment: "2022" },
      { name: "Sacramento County Employees' Retirement System", aum: "$11.9 billion", investments: 7, amount: "$166 million", lastCommitment: "2021" },
      { name: "San Bernardino County Employees' Retirement Association", aum: "$14.0 billion", investments: 6, amount: "$70 million", lastCommitment: "2019" },
    ]
  },
  {
    state: "Colorado", pensions: [
      { name: "Colorado School Division Pension", aum: "N/A", investments: 16, amount: "$658 million", lastCommitment: "2021" },
      { name: "Colorado Public Employees' Retirement Association", aum: "$61.8 billion", investments: 21, amount: "$775 million", lastCommitment: "2021" },
    ]
  },
  { state: "Connecticut", pensions: [{ name: "Connecticut State Public Employees' Retirement Association", aum: "$19.6 billion", investments: 1, amount: "$50 million", lastCommitment: "1999" }] },
  { state: "Delaware", pensions: [{ name: "Delaware Public Employees' Retirement System", aum: "$12.3 billion", investments: 10, amount: "$305 million", lastCommitment: "2020" }] },
  {
    state: "Florida", pensions: [
      { name: "Florida State Board of Administration", aum: "$235.2 billion", investments: 15, amount: "Undetermined", lastCommitment: "2022" },
      { name: "Florida Retirement System Pension Plan", aum: "$188.7 billion", investments: 15, amount: "$1,664 million", lastCommitment: "2022" },
    ]
  },
  { state: "Hawaii", pensions: [{ name: "Employees' Retirement System of the State of Hawaii", aum: "$21.6 billion", investments: 6, amount: "$140 million", lastCommitment: "2022" }] },
  { state: "Idaho", pensions: [{ name: "Public Employee Retirement System of Idaho", aum: "$22.3 billion", investments: 1, amount: "$25 million", lastCommitment: "2005" }] },
  {
    state: "Illinois", pensions: [
      { name: "Teachers Retirement System of the State of Illinois", aum: "$64.7 billion", investments: 34, amount: "$2,012 million", lastCommitment: "2022" },
      { name: "Illinois Municipal Retirement Fund", aum: "$49.2 billion", investments: 7, amount: "$325 million", lastCommitment: "2022" },
      { name: "State Universities Retirement System (of Illinois)", aum: "$22.5 billion", investments: 4, amount: "$31 million", lastCommitment: "2021" },
      { name: "Illinois State Board of Investment", aum: "$22.9 billion", investments: 3, amount: "$67 million", lastCommitment: "2020" },
    ]
  },
  { state: "Indiana", pensions: [{ name: "Indiana Public Retirement System", aum: "$39.0 billion", investments: 21, amount: "$251 million", lastCommitment: "2022" }] },
  { state: "Iowa", pensions: [{ name: "Iowa Municipal Fire & Police Retirement System", aum: "$3.3 billion", investments: 24, amount: "$593 million", lastCommitment: "2014" }] },
  { state: "Kentucky", pensions: [{ name: "Kentucky Teachers' Retirement System", aum: "$22.5 billion", investments: 1, amount: "$50 million", lastCommitment: "2018" }] },
  {
    state: "Louisiana", pensions: [
      { name: "Louisiana State Employees' Retirement System", aum: "$12.8 billion", investments: 4, amount: "$350 million", lastCommitment: "2022" },
      { name: "Teachers' Retirement System of Louisiana", aum: "$24.5 billion", investments: 2, amount: "$125 million", lastCommitment: "2019" },
    ]
  },
  { state: "Maine", pensions: [{ name: "Maine Public Employees Retirement System", aum: "$18.2 billion", investments: 6, amount: "$279 million", lastCommitment: "2018" }] },
  { state: "Maryland", pensions: [{ name: "Maryland State Retirement & Pension System", aum: "$62.9 billion", investments: 34, amount: "$3,050 million", lastCommitment: "2023" }] },
  { state: "Massachusetts", pensions: [{ name: "Massachusetts Pension Reserves Investment Trust", aum: "$96.6 billion", investments: 10, amount: "$440 million", lastCommitment: "2023" }] },
  {
    state: "Michigan", pensions: [
      { name: "State of Michigan Retirement Systems", aum: "$95.3 billion", investments: 32, amount: "$975 million", lastCommitment: "2021" },
      { name: "Michigan Department of Treasury", aum: "$92.6 billion", investments: 25, amount: "$365 million", lastCommitment: "2019" },
    ]
  },
];

const Pensions = () => {
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
            Conflict Capital
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            Pensions
          </h1>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
            Public Pensions Record of Investing in Adversarial Countries
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Below is the historical record of private investments in the listed countries.
          </p>

          <div className="bg-card border border-border p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-gold flex-shrink-0" />
              <h3 className="font-display text-2xl text-foreground">Insights on US Public Pensions</h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The majority of large Public Pensions across the US have invested in China and Hong Kong at some point. More alarming is the recency, as 29 of 74 have made investments in the past 12 months (39%), and 56 of 74 of public pension funds with previous investments have made follow-up investments in the past 36 months: a staggering 75% rate by pension portfolio managers entrusted to manage the vast majority of the wealth of pensioners in the US.
              </p>
              <p>
                As indicated above, the investment rates have been accelerated and it should be noted that each commitment to China or Hong Kong has an investment period that spans 10 years on average, so the commitments today are legally required to be honored for years to come.
              </p>
              <p>
                Over the past 36 months, US public pensions have invested more than $68 billion in China and Hong Kong. For comparison, that is an order of magnitude more than the total amount that the US government spends, both domestically and abroad, in promoting human rights, a dubious contrast against the principled values we champion to the world.
              </p>
              <p>
                Additionally, there is no indication that the pace of investment is abating. As the chart indicates, among the largest pension funds reviewed, the number of Public Pension recommitting to a fund investing in in China reached a 5-year high in 2022.
              </p>
              <p>
                Pensions continue to chase returns seemingly without regard to the dilemma of boosting competing technologies and the real risk of intellectual property theft and complicit transfers to adversaries.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 border border-border p-6 mb-12 text-sm text-muted-foreground">
            <p className="font-semibold mb-2">Disclaimer:</p>
            <p>
              The information is derived from publicly available sources and private databases but significantly underreports the scope and scale of the issue, suffering from the twin challenges a) that many public pensions only report in aggregate, thus, offering little transparency on particular fund managers necessary to properly evaluate the investments, and, b) private pensions are not subject to similar disclosure and reporting requirements. Additionally, the lag in reporting under many state-specific regimes may undercount the number of states who have recently made commitments.
            </p>
          </div>
        </div>
      </section>

      {/* State by State Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
            Public Pensions that have made investment commitments to funds in adversarial countries
          </h2>
          <p className="text-muted-foreground mb-12">
            The following are listed by State and Assets Under Management:
          </p>

          <div className="space-y-8">
            {pensionData.map((stateData) => (
              <div key={stateData.state} className="bg-card border border-border p-6">
                <h3 className="font-display text-2xl text-gold mb-4">{stateData.state}</h3>
                <div className="space-y-4">
                  {stateData.pensions.map((pension) => (
                    <div key={pension.name} className="border-l-2 border-gold/30 pl-4">
                      <h4 className="font-semibold text-foreground">{pension.name}</h4>
                      <p className="text-sm text-muted-foreground">AUM: {pension.aum}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        The Pension has made a total of {pension.investments} investment{pension.investments > 1 ? 's' : ''} in adversarial countries amounting to {pension.amount} in commitments, with the latest reported commitment in {pension.lastCommitment}, which underreports the total investment figures given the relatively limited public disclosure requirements, according to public filings and other proprietary research.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pensions;