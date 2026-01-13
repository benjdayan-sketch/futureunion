import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Initiatives } from "@/components/Initiatives";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Galvanizing the Private Sector"
        description="Future Union is a bipartisan advocacy organization designed to fuse private sector capitalism and forward-thinking leaders to address emerging technology and security challenges."
      />
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Initiatives />
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;