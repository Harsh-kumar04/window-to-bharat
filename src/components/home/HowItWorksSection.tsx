import {
  FileText,
  Stethoscope,
  ClipboardList,
  BadgeCheck,
  Plane,
  Hospital,
  HeartPulse,
  PhoneCall,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FileText,
      number: "01",
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      icon: Stethoscope,
      number: "02",
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      icon: ClipboardList,
      number: "03",
      title: t("step3Title"),
      description: t("step3Desc"),
    },
    {
      icon: BadgeCheck,
      number: "04",
      title: t("step4Title"),
      description: t("step4Desc"),
    },
    {
      icon: Plane,
      number: "05",
      title: t("step5Title"),
      description: t("step5Desc"),
    },
    {
      icon: Hospital,
      number: "06",
      title: t("step6Title"),
      description: t("step6Desc"),
    },
    {
      icon: HeartPulse,
      number: "07",
      title: t("step7Title"),
      description: t("step7Desc"),
    },
    {
      icon: PhoneCall,
      number: "08",
      title: t("step8Title"),
      description: t("step8Desc"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorksSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-[-50%] w-[100%] h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-xl p-6 shadow-card h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
