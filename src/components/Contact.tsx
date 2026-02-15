import { Mail, ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";


export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">
            <EditableText name="home.contact.label" defaultContent="Get Involved" />
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            <EditableText name="home.contact.title" defaultContent="Join the Movement" />
          </h2>
          <div className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <EditableText
              name="home.contact.description"
              multiline={true}
              defaultContent="The self-funded initiative was designed and created to be absent any party affiliation, only a singularly mission-first, voluntary dedication by all members committed to translating purpose into measurable change."
            />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <EditableLink
              name="home.contact.btn.email.text"
              linkName="home.contact.btn.email.href"
              defaultContent="Contact Us"
              defaultHref="mailto:info@futureunion.co"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5" />
            </EditableLink>
            <EditableLink
              name="home.contact.btn.more.text"
              linkName="home.contact.btn.more.href"
              defaultContent="Learn More"
              defaultHref="#about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold uppercase tracking-wider text-sm hover:border-gold hover:text-gold transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};