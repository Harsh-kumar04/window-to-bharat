import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  const phoneNumber = '919876543210';
  const message = encodeURIComponent('Hello! I would like to inquire about medical treatment options.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="py-16 md:py-24 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t('ctaSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('ctaWhatsApp')}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base px-8"
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                {t('ctaCall')}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-white/70 text-sm">
            Or email us at{' '}
            <a href="mailto:info@medicareindia.com" className="underline hover:text-white">
              info@medicareindia.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;