import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const hospitals = [
  {
    name: "Medanta – The Medicity",
    location: "Gurgaon, Near Delhi",
    accreditation: "JCI & NABH Accredited",
    specialties: "Cardiac Sciences, Oncology, Transplants",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Fortis Memorial Research Institute (FMRI)",
    location: "Gurgaon, Delhi NCR",
    accreditation: "JCI & NABH Accredited",
    specialties: "Cardiology, Neurosciences, Oncology",
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Max Super Speciality Hospital",
    location: "Delhi NCR",
    accreditation: "NABH Accredited",
    specialties: "Cancer Care, Neurology, Cardiology",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BLK-Max Super Speciality Hospital",
    location: "New Delhi",
    accreditation: "NABH & NABL Accredited",
    specialties: "Bone Marrow Transplant, Oncology",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Artemis Hospital",
    location: "Gurgaon",
    accreditation: "JCI & NABH Accredited",
    specialties: "Orthopaedics, Cardiology, Neurosurgery",
    image:
      "https://images.unsplash.com/photo-1580281657521-6c6a1e89c01b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Indraprastha Apollo Hospital",
    location: "New Delhi",
    accreditation: "JCI Accredited",
    specialties: "Multi-Organ Transplants, Oncology",
    image:
      "https://images.unsplash.com/photo-1586773860383-dab5f3bc2c3f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Manipal Hospital",
    location: "Dwarka, Delhi",
    accreditation: "NABH Accredited",
    specialties: "General Surgery, Cardiology",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Nanavati Max Super Speciality Hospital",
    location: "Mumbai",
    accreditation: "NABH Accredited",
    specialties: "Cancer Care, Orthopaedics",
    image:
      "https://images.unsplash.com/photo-1586773860373-7f5c2c3d94c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Yatharth Super Speciality Hospital",
    location: "Greater Noida, Delhi NCR",
    accreditation: "NABH Accredited",
    specialties: "Nephrology, Orthopaedics",
    image:
      "https://images.unsplash.com/photo-1580281658629-50f1a8c0b1a4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Accord Superspeciality Hospital",
    location: "Faridabad",
    accreditation: "NABH Accredited",
    specialties: "Cardiac Sciences, Critical Care",
    image:
      "https://images.unsplash.com/photo-1576765608535-5fcb1a1c89f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Metro Heart Institute with Multispeciality",
    location: "Faridabad",
    accreditation: "NABH Accredited",
    specialties: "Cardiology, Cardiac Surgery",
    image:
      "https://images.unsplash.com/photo-1580281657931-e9e5b02f7c2b?auto=format&fit=crop&w=1200&q=80",
  },
];


const Hospitals = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Partner Hospitals
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with India’s leading accredited hospitals to provide
              international patients with safe, advanced, and affordable medical
              care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {hospital.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {hospital.location}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {hospital.accreditation}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {hospital.specialties}
                  </p>

                  <Link to="/contact">
                    <Button className="w-full mt-4">{t("enquireNow")}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hospitals;
