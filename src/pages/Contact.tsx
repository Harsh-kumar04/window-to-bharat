import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

const countries = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "UAE", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
];

const Contact = () => {
  const { t } = useLanguage();

  const [country, setCountry] = useState("India");
  const [phoneCode, setPhoneCode] = useState("+91");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const fullPhone = `${phoneCode}${form.phone.value}`;

    const message = `
Name: ${form.name.value}
Email: ${form.email.value}
Country: ${country}
WhatsApp: ${fullPhone}
Treatment: ${form.treatment.value}

Message:
${form.message.value}
`;

    // ✅ WhatsApp
    window.open(
      `https://wa.me/919990821680?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    // ✅ Email (Google Apps Script - FREE)
    fetch(
      "https://script.google.com/macros/s/AKfycbxg-XcazI5LNKzVpc5ttm-MykxC0i6iVgVppQlCeB2rrcRNDv-MVy-OHVO9vgVXrlub/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          phone: fullPhone,
          country,
          treatment: form.treatment.value,
          message: form.message.value,
        }),
      },
    );

    toast({
      title: "Enquiry Sent",
      description: "You are being redirected to WhatsApp.",
    });

    form.reset();
    setCountry("India");
    setPhoneCode("+91");
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Full Name" required />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />

                <select
                  className="w-full border rounded-md px-3 py-2"
                  value={country}
                  onChange={(e) => {
                    const selected = countries.find(
                      (c) => c.name === e.target.value,
                    );
                    if (!selected) return;
                    setCountry(selected.name);
                    setPhoneCode(selected.code);
                  }}
                  required
                >
                  {countries.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <div className="flex gap-2">
                  <Input
                    value={phoneCode}
                    readOnly
                    className="w-[25%] bg-gray-100"
                  />
                  <Input name="phone" placeholder="WhatsApp Number" required />
                </div>

                <Input
                  name="treatment"
                  placeholder="Treatment Required"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Briefly describe your medical concern"
                  rows={5}
                  required
                />

                <Button type="submit" className="w-full">
                  Send Enquiry via WhatsApp
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 84250384912</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">
                    contact@windowtobharat.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground leading-relaxed">
                    226A, 3rd Floor, Prakash Mohalla, East of Kailash, New
                    Delhi, Delhi 110065, India
                  </p>
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
