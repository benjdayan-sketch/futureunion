import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";

const ThankYouPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <SEO
                title="Thank You | Future Union"
                description="Thank you for getting in touch with Future Union. We will respond to your message shortly."
            />
            <Navbar />

            <section className="pt-32 pb-16 bg-gradient-subtle relative overflow-hidden flex-grow flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center max-w-2xl">
                    <div className="mb-8 p-6 bg-gold/10 rounded-full border border-gold/20">
                        <CheckCircle2 className="w-16 h-16 text-gold" />
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
                        <EditableText name="thankyou.hero.title" defaultContent="Thank You" />
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                        <EditableText
                            name="thankyou.hero.description"
                            defaultContent="Your message has been received. We appreciate your interest in Future Union and will get back to you as soon as possible."
                            multiline
                        />
                    </p>

                    <Link
                        to="/"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <EditableText name="thankyou.hero.back" defaultContent="Back to Home" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ThankYouPage;
