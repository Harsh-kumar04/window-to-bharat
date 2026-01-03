import { FileText, Stethoscope, Plane, HeartPulse } from 'lucide-react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  { icon: FileText, num: '01', key: 'step1' },
  { icon: Stethoscope, num: '02', key: 'step2' },
  { icon: Plane, num: '03', key: 'step3' },
  { icon: HeartPulse, num: '04', key: 'step4' },
];

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('howItWorksPageTitle')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('howItWorksPageSubtitle')}</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 bg-card rounded-xl p-6 shadow-card">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-primary font-semibold">Step {step.num}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{t(`${step.key}Title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`${step.key}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;