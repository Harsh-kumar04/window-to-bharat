import { Shield, Users, Award, Globe } from 'lucide-react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const reasons = [
    { icon: Shield, title: 'JCI Accredited Partners', desc: 'We work only with internationally accredited hospitals.' },
    { icon: Users, title: 'Dedicated Care Team', desc: 'Personal coordinator assigned to every patient.' },
    { icon: Award, title: 'Expert Specialists', desc: 'Access to India\'s top medical professionals.' },
    { icon: Globe, title: 'Global Experience', desc: 'Trusted by patients from 50+ countries.' },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('aboutTitle')}</h1>
            <p className="text-lg text-muted-foreground">{t('aboutSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">{t('aboutMission')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('aboutMissionText')}</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">{t('aboutVision')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('aboutVisionText')}</p>
            </div>
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">{t('aboutWhyUs')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center shadow-card">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <r.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;