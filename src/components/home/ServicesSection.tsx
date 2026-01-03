import { Link } from 'react-router-dom';
import { Heart, Bone, Brain, Eye, Baby, Stethoscope, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Heart,
      title: 'Cardiac Care',
      description: 'Heart surgeries, bypass, angioplasty, and advanced cardiac interventions.',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Joint replacements, spine surgery, and sports medicine treatments.',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Brain surgery, spine procedures, and neurological disorder treatments.',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'LASIK, cataract surgery, and advanced eye care treatments.',
    },
    {
      icon: Baby,
      title: 'Fertility & IVF',
      description: 'Complete fertility solutions with high success rates.',
    },
    {
      icon: Stethoscope,
      title: 'Oncology',
      description: 'Comprehensive cancer care with latest treatment protocols.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to="/treatments"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/treatments">
              View All Treatments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;