import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CleanCapital = () => {
  return (
    <main className="min-h-screen bg-background">
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
            Future Union
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            Clean Capital Certification
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            Geopolitical evaluation and transparency assessment of the funding sources of US and International Venture Capital & Private Equity Funds
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
                Promoting Democratic Ideals through Dealmaking
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Evaluating the Sources of Limited Partner Capital comprising the Alternative Investment Community
              </p>
            </div>

            <div className="bg-card border border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-gold" />
                <h3 className="font-display text-2xl text-foreground">Certified Investors</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Linked below are Investors that have Voluntarily Certified as not having ties to countries hostile to Democracy.
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-gradient-subtle border border-border">
                <h3 className="font-display text-2xl text-foreground mb-4">What is Clean Capital Certification?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clean Capital Certification is Future Union's initiative to evaluate and verify that venture capital and private equity funds do not have funding ties to countries hostile to democracy. This voluntary certification program promotes transparency and ethical investment practices in the technology and financial sectors.
                </p>
              </div>

              <div className="p-8 bg-gradient-subtle border border-border">
                <h3 className="font-display text-2xl text-foreground mb-4">Why It Matters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In an era of increasing geopolitical competition, understanding the source of capital is crucial for national security and democratic values. By certifying that investment funds are free from adversarial influence, we help protect innovation ecosystems and ensure that capital flows support rather than undermine democratic institutions.
                </p>
              </div>

              <div className="p-8 bg-gradient-subtle border border-border">
                <h3 className="font-display text-2xl text-foreground mb-4">How to Get Certified</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Investment firms interested in obtaining Clean Capital Certification can contact Future Union to begin the evaluation process. Our team will assess the fund's limited partner base and verify compliance with our standards for democratic alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CleanCapital;