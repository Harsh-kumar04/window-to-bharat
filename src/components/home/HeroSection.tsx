import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background video */}
        <video
          preload="none"
          className="absolute inset-0 w-full h-full object-cover scale-[1.05] opacity-70 z-0"
          src="https://ik.imagekit.io/kdti0s4hl/7579843-uhd_4096_2160_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Accent glow (SUBTLE, NOT GREEN, BEHIND OVERLAY) */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl z-[1]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-[2]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {t("heroTitle")}
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {t("heroSubtitle")}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base px-8"
            >
              <Link to="/contact">
                {t("getConsultation")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white  hover:bg-white/10  px-8"
            >
              <Link to="/treatments">{t("treatments")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
