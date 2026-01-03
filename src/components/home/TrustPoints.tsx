import { Shield, Clock, Wallet } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustPoints = () => {
  const { t } = useLanguage();

  const points = [
    {
      icon: Shield,
      title: t('trust1Title'),
      description: t('trust1Desc'),
    },
    {
      icon: Clock,
      title: t('trust2Title'),
      description: t('trust2Desc'),
    },
    {
      icon: Wallet,
      title: t('trust3Title'),
      description: t('trust3Desc'),
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;