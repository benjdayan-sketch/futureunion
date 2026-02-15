import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";

const investors = [
  {
    name: "Itay Rand",
    firm: "10D",
    bio: "Itay is a Managing Partner at 10D, a firm with $355 million assets under management, where he focuses on early-stage investments across SaaS, enterprise software, cybersecurity, logistics, and other emerging tech domains. He began his investment career at a Chicago-based private equity firm focused on mobile chip technologies and later joined the team at 83North (formerly Greylock). Before venture investing, Itay worked at Boston Consulting Group, advising global enterprises on expansion and restructuring, and later served as CEO of a media technology company in Tel Aviv. He began his career at the Israel Securities Authority, gaining firsthand experience in corporate finance during the lead-up to the 2007 financial crisis. Itay earned both an LLB and a Bachelor's degree in accounting from the Hebrew University of Jerusalem and an MBA from the Kellogg School of Management."
  },
  {
    name: "Rana Yared",
    firm: "Balderton Capital",
    bio: "Rana is a General Partner at Balderton Capital, a leading European venture capital firm investing from seed to public markets with $5 billion assets under management. She focuses on financial technology and enterprise software, bringing deep expertise in scaling institutional platforms and commercializing financial infrastructure. Prior to joining Balderton in 2020, Rana was a Partner at Goldman Sachs, where she spent 14 years leading investments in fintech and enterprise technology across the Principal Strategic Investments Group and GS Growth in New York and London. She currently serves on the boards of Ramp Network, Coro, TreasurySpring, Writer, Wabash College, and Tradeweb. Rana earned a Bachelor of Science and a Bachelor's in International Relations from the Wharton School at the University of Pennsylvania, as well as a Master's of Science from the London School of Economics."
  },
  {
    name: "Chris Yeh",
    firm: "Blitzscaling Ventures",
    bio: "Chris is a founding General Partner at Blitzscaling Ventures, where he invests in and advises early-stage startups in the future of work and those pursuing hypergrowth in the age of artificial intelligence. Chris is the co-author of the New York Times bestseller The Alliance and Blitzscaling, co-written with LinkedIn founder Reid Hoffman. He has founded, advised, or invested in over 100 high-tech companies. Chris earned two Bachelor's degrees with distinction from Stanford University and an MBA from Harvard Business School, where he was a Baker Scholar."
  },
  {
    name: "Beth Kroman",
    firm: "Bloomberg Beta",
    bio: "Beth is a Director at Bloomberg Beta, a multi-stage media and digital investor focusing on the future of work and artificial intelligence, with $450 million assets under management, and is affiliated with the media corporation, Bloomberg. Before investing, Beth served as defense advisor to Michael R. Bloomberg, where she supports his work addressing key challenges in national security innovation. Beth has assisted in launching pilot programs to streamline acquisition in the Department of Defense, expand STEM talent in the military through Service Academy partnerships, and expose military and government leaders to private financing. Previously, she was a Director at Pallas Advisors, a national security-focused advisory firm helping emerging and critical technology companies navigate the defense ecosystem. Beth earned her Bachelor's degree in international relations from George Washington University and a Master's degree in security studies from Georgetown University."
  },
  {
    name: "Brian Wayne",
    firm: "CurvePoint Capital",
    bio: "Brian is Managing Partner and Co-Founder of CurvePoint Capital, an investment firm focused on structured capital in growth-stage climate and energy transition solutions. Before founding CurvePoint, Brian co-founded Aegon Climate Capital at Aegon Asset Management, a global insurance-owned asset manager with approximately $350 billion in assets under management. Prior to Aegon, Brian invested across private equity, private credit, and venture capital, deploying in excess of $1 billion in capital. Brian also co-founded The Water Genome, a nonprofit addressing water challenges. Brian is a member of The Milken Institute's Young Leaders Circle, an advisor at AltaSea at the Port of Los Angeles, and on the Advisory Council of Concordia. Brian earned a Bachelor's degree from Thomas Edison State University and his MBA from the University of Massachusetts."
  },
  {
    name: "Matthew Kibble",
    firm: "DYNE Ventures",
    bio: "Matthew is the Founder and Managing Partner of DYNE Ventures, where he leads global investments across maritime technologies, dual-use ventures, and strategic infrastructure. He began his career at Ernst & Young and spent over five years at JPMorgan Chase, working across investment banking and Asian equities and derivatives, before founding the Latin American investment firm Everlight Capital. Through DYNE, Kibble supports AUKUS and QUAD initiatives, including the DYNE Maritime Dual Use Fund and investments targeting critical U.S. supply chain challenges. He serves on multiple boards and is an advisor at CNAS. Matt earned a Bachelor's degree in finance and accounting, as well as biomedical sciences from the University of Queensland."
  },
  {
    name: "Mikolaj Firlej",
    firm: "Expeditions Fund",
    bio: "Mikolaj is a co-founder and General Partner at Expeditions Fund, a specialist dual-use venture capital firm investing in deep tech and security focused startups across Europe. He specializes in investments in artificial intelligence (AI). He also directs the Law and Technology hub at the Surrey Institute for People-Centred AI, where he lectures on AI and regulation, and is a Research Affiliate on the law faculty at the University of Oxford. Before investing, Mikolaj was a cross-border consultant and advisor between the U.S. and Europe and chaired numerous panels on artificial intelligence, privacy and ethics. He earned his bachelor's of science in philosophy and law from the University of Warsaw; a masters in public policy and philosophy and a doctorate in philosophy at the University of Oxford."
  },
  {
    name: "Sid Trivedi",
    firm: "Foundation Capital",
    bio: "Sid is a Partner at Foundation Capital, a leading venture capital firm with $6 billion of assets under management, where he focuses on early-stage investments in cybersecurity and IT infrastructure. He has led investments in companies such as Stacklet, AirMDR, Prime Security, Permiso, Pulse Security AI, DevZero, Neurelo, Levo, Phenom, and was an early investor in Attivo Networks (acquired by SentinelOne), CloudKnox (acquired by Microsoft), Respond Software (acquired by Mandiant), and MistNet (acquired by LogRhythm). Previously, Sid was an investor at Omidyar Technology Ventures and STG Partners. He is the co-founder of CyberSeed, a community of over 1,000 cybersecurity founders, and co-hosts Inside the Network. He earned a Bachelor's degree from Cornell University."
  },
  {
    name: "Matt Byington",
    firm: "General Catalyst",
    bio: "Matt is an investor at General Catalyst, a global venture capital firm with over $32 billion in assets under management, on the Global Resilience team. He specializes in investments in Defense and Intelligence, where he has expanded the depth and breadth of the practice with his keen operational insights and understanding of the Department of Defense, alongside his investments in industrial technologies. Before joining General Catalyst, Matt was part of the Naval Special Warfare Tactical Development Squadron, where he served as Lt. Commander, leading a multi-disciplinary 20-person team evaluating and adopting emerging technology for special operations. He also served as the deputy commander at the Explosive Ordnance Disposal Tactical Development Squadron. He earned his Bachelor's degree in systems engineering from the United States Naval Academy and an MBA from Harvard Business School."
  },
  {
    name: "Lukas Leitner",
    firm: "Lakestar",
    bio: "Lukas is a Partner in the Resilience team at Lakestar, one of Europe's largest venture capital funds with $2 billion assets under management, where he helps lead the firm's investment strategy in Defensetech, Resilience, and European Sovereignty. He leads investments in dual-use technologies, the future of computing, next-gen energy, robotics, and aerospace. Before joining Lakestar, Lukas worked at Boston Consulting Group, advising clients on M&A, venture building, and strategic portfolio management across various industries, including national security and infrastructure. Lukas earned a Bachelor's degree in business administration from San Diego State University and the University of Mannheim, as well as an MBA from the Yale School of Management."
  },
  {
    name: "Trina Van Pelt",
    firm: "Lambda Growth Advisors",
    bio: "Trina is Managing Partner of Lambda Growth Advisors, an advisory firm serving institutional investors at the intersection of technology, capital, and industrial strategy. She was previously a General Partner at Intel Capital, where she led frontier technology investing focused on next-generation digital infrastructure, intelligent edge applications, robotics, and data platforms after a decade as a Vice President of M&A at Intel. Before Intel, Trina held roles in corporate development at CNET Networks, private equity at TA Associates, and investment banking at Lehman Brothers. Trina earned a Bachelor's in business administration from the University of Michigan and a Master's degree from the Stanford Graduate School of Business."
  },
  {
    name: "Mike Palank",
    firm: "MaC Venture Capital",
    bio: "Mike is a General Partner at MaC Venture Capital, a firm with $500 million assets under management, where he focuses on seed-stage hard tech investing across sectors. Prior to MaC, Mike was a General Partner at M Ventures, an early-stage venture fund based in Los Angeles that subsequently merged. He was also a member of the founding team of MACRO Media leading digital strategy for the media company focused on the multicultural market. Before entering the startup world, Mike spent eight years in media and entertainment, beginning as an agent at The William Morris Agency before serving as Director of Business Development at Will Smith's production company, Overbrook Entertainment. Mike earned his Bachelor's degree in finance from DePaul University."
  },
  {
    name: "Carl Coward",
    firm: "Neoterra Partners",
    bio: "Carl is the Co-Founder of Neoterra Partners, an investment firm that focuses on developing integrated critical mineral supply chains aligned with U.S. security. At Neoterra, he leads initiatives to reduce U.S. dependence on foreign sources of strategic minerals—including lithium, rare earth elements, cobalt, and copper—supporting the defense, electrification, and clean energy sectors. Before founding Neoterra, Carl was a Principal at Focus Capital Partners, investing across critical minerals, energy, and infrastructure. Carl is also the founder of The Future Conference, a forum exploring the intersection of national competitiveness, emerging technologies, and industrial strategy. Carl earned a Bachelor of Commerce degree from Curtin University."
  },
  {
    name: "Luke Ren",
    firm: "Northguard",
    bio: "Luke is the founder of Northguard, an Australian critical minerals fund supported by Fortress Investments and Khosla Ventures. He serves in a dual role at venture-backed mining company, Terra AI, setting up an AI-enabled critical minerals fund. Luke has had operating roles at three mining companies, all of which exited to new investors. Before his mining roles, Luke was a consultant at the boutique consultancy, BaxterLawley. Throughout his tenure in the Australian mining industry, Luke has had numerous experiences interacting with Chinese investors and brings a wealth of knowledge of the customary operating practices of such hybrid public-private investors in emerging markets. Luke earned a Bachelor of Science degree with honors in psychology at the University of Western Australia and an MBA from Harvard Business School."
  },
  {
    name: "Nick Kim",
    firm: "Upfront Ventures",
    bio: "Nick is a Partner and leads defense investing at Upfront Ventures, a multi-stage venture capital firm based in Los Angeles and San Francisco with $2.3 billion assets under management. He leads the firm's hard tech investing practice, making investments in aerospace and defense, energy, and other national infrastructure sectors. Before joining Upfront, Nick made early-stage technology investments at Crosscut Ventures and the Dorm Room Fund, a student-run venture capital fund originally backed by First Round Capital. After starting his career on the foreign exchange and interest rate trading desks at HSBC, Nick was one of the early employees at Warby Parker. Nick earned a Bachelor's degree in economics from the University of California, Berkeley, and an MBA from The Wharton School at the University of Pennsylvania."
  },
  {
    name: "Morgan Hitzig",
    firm: "Venrock",
    bio: "Morgan is an investor at Venrock, an early-stage venture firm investing in technology and healthcare with $2.9 billion in assets under management. She focuses on technology companies that intersect with the public sector, especially public safety, critical infrastructure, and national security. She is a U.S. Navy reservist who has deployed in support of Special Operations across the Indo-Pacific and Middle East. Prior to Venrock, Morgan was Head of Growth at Peregrine Technologies, a data integration platform for state and local government agencies, and Senior Director of Partnerships at Dataminr, and analyst in the NYPD's Counterterrorism Bureau after beginning her career at Bank of America Merrill Lynch. She earned her bachelors and masters degrees in international relations from Johns Hopkins University."
  },
  {
    name: "Hernando Guzman",
    firm: "XB Ventures",
    bio: "Hernando is the Managing Partner and co-founder of XB Ventures, a Mexico-based venture capital firm with $60 million assets under management that invests in early-stage startups with global ambitions and ties to the Mexican market. Before XB Ventures, he was an investor at Latin Idea Ventures, where he sourced and structured investments in technology-driven companies. Hernando began his career as a consultant at Accenture and BearingPoint, and later founded a search fund, launching startups in the tech and retail sectors. Hernando earned a Bachelor of Science in mechanical and electrical engineering from Universidad Iberoamericana, where he now lectures in the Industrial Engineering School, and an MBA from Cornell University."
  },
  {
    name: "Ross Fubini",
    firm: "XYZ Ventures",
    bio: "Ross is the Founder and Managing Partner of XYZ Venture Capital, an early-stage venture firm known for defensetech investing with over $1.2 billion in assets under management. He focuses on investments in fintech, enterprise software, and defense technologies, with a portfolio that includes Anduril, Verkada, Sardine, and Hex. Before founding XYZ in 2016, Ross co-founded Village Global and held operating roles as Founder and CTO of CubeTree (acquired by SuccessFactors) and Director of Engineering at Plumtree Software. He serves on the boards of Sardine, Legion Technologies, and Ginkgo Bioworks, and advises executives at Palantir. Ross earned a Bachelor of Science in computer science from Carnegie Mellon University."
  },
];

const experts = [
  {
    name: "Saša Zdjelar",
    firm: "Crosspoint Capital",
    bio: "Saša is an Operating Partner at Crosspoint Capital and the Chief Trust Officer at ReversingLabs, where he leads enterprise and product security, corporate strategy, and customer engagement. He brings nearly two decades of leadership across Fortune 10 companies, specializing in cybersecurity, digital resilience, and strategic transformation. Before joining ReversingLabs, Saša was Senior Vice President of Security at Salesforce, overseeing global security operations and leading key initiatives like Zero Trust. He previously spent nearly 20 years at ExxonMobil in senior roles across security, software engineering, and enterprise architecture. Saša earned a Bachelor's degree in Business Management and a Master's degree in decision science from the University of Florida."
  },
  {
    name: "Vijay Bolina",
    firm: "Google DeepMind",
    bio: "Vijay is Chief Information Security Officer (CISO) at Google DeepMind, where he leads a specialized research and engineering team focused on addressing emerging risks in abuse, security, and privacy for next-generation artificial intelligence systems. He also oversees a portfolio of research targeting root-node problems in cybersecurity critical to safe and secure general-purpose AI. Previously, Vijay held senior leadership roles across the public and private sectors, defending organizations against nation-state threat actors targeting critical infrastructure and intellectual property. Vijay combines deep technical expertise with strategic insight and is an active advisor to builders and investors in enterprise software, cybersecurity, and AI. Vijay earned a Bachelor of Science in computer science from the University of California, Davis, and a Master's degree in computer science from George Washington University."
  },
  {
    name: "Laurence Pevsner",
    firm: "Lux Capital",
    bio: "Laurence is a Partner in Research at Lux Capital, where he is responsible for thought leadership and pedagogy at the intersection of science, technology, and public policy. Before joining Lux, Laurence served as Director of Speechwriting to Linda Thomas-Greenfield, U.S. Ambassador to the United Nations. He has authored over 650 speeches, previously working for West Wing Writers, counseling CEOs, philanthropists, and government leaders. Laurence served in President Biden's writers' room and at the 2024 Democratic National Convention, is the 2022 Grand Prize Columnist Winner at McSweeney's, and is a resident fellow at the Moynihan Center. He earned his Bachelor's degree in law, jurisprudence, and social thought from Amherst College."
  },
  {
    name: "David Messenger",
    firm: "McKinsey & Company",
    bio: "David is a consultant at McKinsey & Company, where he advises clients on strategic and operational initiatives in defense and security and corporate resilience. Before joining McKinsey, he worked at Onebrief, a U.S. software company supporting mission planning for U.S. and allied forces, where he led engagements with strategic partners across Asia. From 2012 to 2022, David served as a U.S. Foreign Service Officer, with diplomatic assignments in Tokyo, New York, and Washington, D.C. including postings at the U.S. Embassy in Japan and the U.S. Mission to the United Nations. David serves as a Term Member of the Council on Foreign Relations. David earned his Bachelors degree in Physics from Washington University in St. Louis and an MBA from Harvard Business School, where he was selected as a Goldsmith Fellow."
  },
  {
    name: "Jakob Stober",
    firm: "McKinsey & Company",
    bio: "Jakob is a Partner at McKinsey & Company, where he leads the defence practice in Europe covering private equity. He engages extensively with the European defense ecosystem to drive strategic growth and value creation. He has over a decade of experience advising clients on M&A, strategy, and growth for industrial companies. Jakob earned his Bachelor's degree in physics from the University of Regensburg, and a Master's degree and a Ph.D in mathematics and statistics from the Technical University of Munich."
  },
  {
    name: "Raven Stein",
    firm: "Fmr. National Security Council",
    bio: "Col. Raven Stein is a career military officer with over 20 years of experience in national security. She has served in multiple assignments, including on the Joint Staff, in the Office of the Secretary of Defense, and on the National Security Council, where she most recently served as Director of Legislative Affairs. As an Army intelligence officer, Raven led decision-making processes in both the executive and legislative branches on a multitude of policy issues. She is a former White House Fellow and served as a Term Member on the Council on Foreign Relations. Raven earned a Bachelor's degree in systems engineering and international relations from the United States Military Academy at West Point, and her Master's degree in international economics and strategic studies from the Johns Hopkins School of Advanced International Studies (SAIS)."
  },
  {
    name: "Valli Sanmugalingam",
    firm: "Senate Intel",
    bio: "Valli is a Professional Staff Member at the United States Senate Select Committee on Intelligence. Valli has worked in several national security roles on Capitol Hill, leading legislation related to outbound investment screening, development finance, and strategic competition with China. She was on the national security staff of Senator Coons (D-DE), Senator Cardin (D-MD), and Senator Casey (D-PA). She currently supports Vice Chairman Mark Warner in intelligence oversight, developing policy related to financial intelligence, strategic competition, and counternarcotics. She specializes in advancing and negotiating bipartisan national security legislation and investment security issues. She is a member of the District of Columbia Bar and earned a Bachelor's degree in international studies at American University and her Juris Doctorate from American University Law School."
  },
  {
    name: "Mark Pascale",
    firm: "Strider Technologies",
    bio: "Mark is Vice President of Intelligence at Strider Technologies, a strategic intelligence firm focused on countering state-sponsored intellectual property (IP) theft and supply chain risk. He also serves as Director of the Intelligence Project at Harvard's Belfer Center, where he leads research on national security and intelligence policy. Mark brings deep expertise in geopolitical risk and great power competition, shaped by a distinguished career at the CIA, where he was the only officer to serve as Chief of Station in three of the agency's most complex environments. He spent over 14 years in China, Russia, and Syria, and is fluent in Arabic, Mandarin, and Russian. He earned a Bachelor's in international relations from Colgate University and a Master's in security studies from Johns Hopkins SAIS, also studying at MGIMO in Moscow."
  },
  {
    name: "Daniel Miessler",
    firm: "Unsupervised Learning",
    bio: "Daniel is the Founder and CEO of Unsupervised Learning, where he develops AI applications and infrastructure amplifying human knowledge capabilities. With over 25 years of experience in cybersecurity, Daniel has held senior roles at Apple, Robinhood, IOActive, and HPE. He advises Fortune 500 companies on strategy, risk, and resilience. Daniel is the creator of multiple open-source and commercial products focused on AI augmentation and human understanding, including Fabric, Substrate, Telos, and Threshold. He earned a Bachelor's degree in computer and information systems from Georgia Southwestern State University."
  },
];

const Fellows2025 = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Fellows 2025"
        description="The 2025 cohort is our largest yet—linking private sector leaders with government stewards and elected representatives to offer technology insights."
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
            <EditableText name="fellows.hero.label" defaultContent="Human Capital" />
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            <EditableText name="fellows.hero.title" defaultContent="The Fellows 2025" />
          </h1>
          <p className="mt-4 text-2xl text-gold font-semibold italic">
            <EditableText name="fellows.hero.subtitle" defaultContent='"The Technological Wizards."' />
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            <EditableText name="fellows.hero.description" multiline defaultContent="The 2025 cohort is our largest yet—linking private sector leaders with government stewards and elected representatives to offer technology insights. By convening a breadth of experience with leaders, we are facilitating credible, capable overlap at the intersection of tech and policy." />
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl text-foreground mb-6">
              <EditableText name="fellows.intro.title" defaultContent="Making the Policy Class More Effective" />
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <EditableText name="fellows.intro.p1" multiline defaultContent="Our goal is to make the policy class more effective, less reactive, by interlocking private sector technological know-how with the architects of policy." />
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <EditableText name="fellows.intro.p2" multiline defaultContent="Future Union is pleased to welcome our 2025 cohort of Fellows. The members comprising this distinguished class come from across the world, representing Australia, Germany, Israel, Mexico, the U.K., and the U.S., as some of the most innovative thinkers in finance and business. While each member is notable of their own accord, each invitee was selected for their ability to contribute in a designated domain and as an added member of broader cohort." />
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <EditableText name="fellows.intro.p3" multiline defaultContent="Collectively, the curated group has elevated the dialogue on national security with fresh perspectives in Washington, D.C. and the technology epicenters across the U.S." />
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <EditableText name="fellows.intro.p4" multiline defaultContent="We are honored to host such a capable group of leaders collaborating and working to make a difference in the competition against America and our allies' adversaries." />
            </p>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-12">
            <EditableText name="fellows.investors.title" defaultContent="Investors" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {investors.map((fellow, index) => (
              <div
                key={fellow.name}
                className="bg-card border border-border p-8 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-2xl text-foreground mb-1">{fellow.name}</h3>
                <span className="text-gold font-semibold text-sm uppercase tracking-wide">{fellow.firm}</span>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{fellow.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-12">
            <EditableText name="fellows.experts.title" defaultContent="Professional Experts" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experts.map((fellow, index) => (
              <div
                key={fellow.name}
                className="bg-card border border-border p-8 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-2xl text-foreground mb-1">{fellow.name}</h3>
                <span className="text-gold font-semibold text-sm uppercase tracking-wide">{fellow.firm}</span>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{fellow.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Fellows2025;