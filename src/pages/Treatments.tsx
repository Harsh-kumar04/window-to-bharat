import { Link } from 'react-router-dom';
import { Heart, Bone, Brain, Eye, Baby, Stethoscope, Pill, Scissors, Smile, Ear } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const treatments = [
  { icon: Heart, title: 'Cardiac Surgery', desc: 'Bypass surgery, valve replacement, angioplasty, and pacemaker implantation.' },
  { icon: Bone, title: 'Orthopedic Surgery', desc: 'Hip and knee replacements, spine surgery, and sports injury treatment.' },
  { icon: Brain, title: 'Neurosurgery', desc: 'Brain tumor removal, spine procedures, and stroke treatment.' },
  { icon: Eye, title: 'Eye Care', desc: 'LASIK, cataract surgery, retina treatment, and corneal transplant.' },
  { icon: Baby, title: 'Fertility & IVF', desc: 'IVF, IUI, egg freezing, and surrogacy programs.' },
  { icon: Stethoscope, title: 'Oncology', desc: 'Chemotherapy, radiation, immunotherapy, and surgical oncology.' },
  { icon: Pill, title: 'Transplants', desc: 'Kidney, liver, bone marrow, and heart transplant surgeries.' },
  { icon: Scissors, title: 'Cosmetic Surgery', desc: 'Rhinoplasty, liposuction, facelifts, and body contouring.' },
  { icon: Smile, title: 'Dental Care', desc: 'Implants, veneers, orthodontics, and full mouth rehabilitation.' },
  { icon: Ear, title: 'ENT Surgery', desc: 'Cochlear implants, sinus surgery, and hearing restoration.' },
];

const Treatments = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('treatmentsPageTitle')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('treatmentsPageSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <Button asChild size="sm"><Link to="/contact">{t('enquireNow')}</Link></Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Treatments;