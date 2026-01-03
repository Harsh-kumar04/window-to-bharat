import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We will get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("contactTitle")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("contactSubtitle")}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {t("contactForm")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder={t("yourName")} required />
                <Input type="email" placeholder={t("yourEmail")} required />
                <Input type="tel" placeholder={t("yourPhone")} />
                <Textarea placeholder={t("yourMessage")} rows={5} required />
                <Button type="submit" className="w-full">
                  {t("sendMessage")}
                </Button>
              </form>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {t("orReachUs")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91  84250384912</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      contact@windowtobharat.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      226A, 3rd Floor, Prakash Mohalla, East of Kailash, New
                      Delhi, Delhi 110065, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
