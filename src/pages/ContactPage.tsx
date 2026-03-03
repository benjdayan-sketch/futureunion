import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";
import { toast } from "sonner";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this to your backend
        console.log("Form submitted:", formData);
        toast.success("Message sent successfully! We'll be in touch soon.");
        setFormData({ name: "", email: "", company: "", message: "" });
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <SEO
                title="Contact Us"
                description="Get in touch with Future Union. Join the movement and help translate purpose into measurable change."
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-subtle relative overflow-hidden flex-grow">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
                    <div className="w-full md:w-1/2">
                        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <span className="text-gold font-semibold uppercase tracking-widest text-sm">
                            <EditableText name="contact.hero.label" defaultContent="Get Involved" />
                        </span>
                        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                            <EditableText name="contact.hero.title" defaultContent="Contact Us" />
                        </h1>
                        <div className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
                            <EditableText
                                name="contact.hero.description"
                                multiline
                                defaultContent="The self-funded initiative was designed and created to be absent any party affiliation, only a singularly mission-first, voluntary dedication by all members committed to translating purpose into measurable change."
                            />
                        </div>

                        <div className="mt-12 space-y-6">
                            <div>
                                <h3 className="font-display text-xl text-foreground mb-2">
                                    <EditableText name="contact.info.general.title" defaultContent="General Inquiries" />
                                </h3>
                                <a href="mailto:info@futureunion.co" className="text-gold hover:underline">
                                    <EditableText name="contact.info.general.email" defaultContent="info@futureunion.co" />
                                </a>
                            </div>

                            <div>
                                <h3 className="font-display text-xl text-foreground mb-2">
                                    <EditableText name="contact.info.media.title" defaultContent="Media & Press" />
                                </h3>
                                <a href="mailto:media@futureunion.co" className="text-gold hover:underline">
                                    <EditableText name="contact.info.media.email" defaultContent="media@futureunion.co" />
                                </a>
                            </div>

                            <div>
                                <h3 className="font-display text-xl text-foreground mb-2">
                                    <EditableText name="contact.info.join.title" defaultContent="Join Us" />
                                </h3>
                                <a href="mailto:joinus@futureunion.co" className="text-gold hover:underline">
                                    <EditableText name="contact.info.join.email" defaultContent="joinus@futureunion.co" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-card border border-border p-8 shadow-2xl">
                        <h2 className="font-display text-2xl text-foreground mb-6">
                            <EditableText name="contact.form.title" defaultContent="Send us a message" />
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    <EditableText name="contact.form.label.name" defaultContent="Full Name" /> <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-gold transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    <EditableText name="contact.form.label.email" defaultContent="Email Address" /> <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-gold transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-foreground">
                                    <EditableText name="contact.form.label.company" defaultContent="Company / Organization" />
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-gold transition-colors"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    <EditableText name="contact.form.label.message" defaultContent="Message" /> <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-gold transition-colors resize-y"
                                    placeholder="How can we collaborate?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                            >
                                <EditableText name="contact.form.submit" defaultContent="Submit Message" />
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
