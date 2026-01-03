import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'United States',
      treatment: 'Cardiac Surgery',
      quote: 'The care I received was exceptional. From the moment I arrived, I felt completely taken care of. The surgeons were world-class and the cost was a fraction of what I would have paid back home.',
      rating: 5,
    },
    {
      name: 'Ahmed Al-Rashid',
      country: 'UAE',
      treatment: 'Knee Replacement',
      quote: 'My knee replacement surgery went perfectly. The hospital facilities were modern and the staff spoke English fluently. I was walking again within weeks of the procedure.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      treatment: 'IVF Treatment',
      quote: 'After years of trying, we finally became parents thanks to MediCare India. The fertility specialists were incredibly supportive throughout our journey. Forever grateful.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-card"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.country} • {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;