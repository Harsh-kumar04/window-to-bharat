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
    image: "../../public/Hospital/1.jpg",
  },
  {
    name: "Fortis Memorial Research Institute (FMRI)",
    location: "Gurgaon, Delhi NCR",
    accreditation: "JCI & NABH Accredited",
    specialties: "Cardiology, Neurosciences, Oncology",
    image: "../../public/Hospital/2.webp",
  },
  {
    name: "Max Super Speciality Hospital",
    location: "Delhi NCR",
    accreditation: "NABH Accredited",
    specialties: "Cancer Care, Neurology, Cardiology",
    image: "../../public/Hospital/3.webp",
  },
  {
    name: "BLK-Max Super Speciality Hospital",
    location: "New Delhi",
    accreditation: "NABH & NABL Accredited",
    specialties: "Bone Marrow Transplant, Oncology",
    image: "../../public/Hospital/4.webp",
  },
  {
    name: "Artemis Hospital",
    location: "Gurgaon",
    accreditation: "JCI & NABH Accredited",
    specialties: "Orthopaedics, Cardiology, Neurosurgery",
    image: "../../public/Hospital/5.webp",
  },
  {
    name: "Indraprastha Apollo Hospital",
    location: "New Delhi",
    accreditation: "JCI Accredited",
    specialties: "Multi-Organ Transplants, Oncology",
    image: "../../public/Hospital/6.jpg",
  },
  {
    name: "Manipal Hospital",
    location: "Dwarka, Delhi",
    accreditation: "NABH Accredited",
    specialties: "General Surgery, Cardiology",
    image: "../../public/Hospital/11.webp",
  },
  {
    name: "Nanavati Max Super Speciality Hospital",
    location: "Mumbai",
    accreditation: "NABH Accredited",
    specialties: "Cancer Care, Orthopaedics",
    image: "../../public/Hospital/7.webp",
  },
  {
    name: "Yatharth Super Speciality Hospital",
    location: "Greater Noida, Delhi NCR",
    accreditation: "NABH Accredited",
    specialties: "Nephrology, Orthopaedics",
    image: "../../public/Hospital/8.webp",
  },
  {
    name: "Accord Superspeciality Hospital",
    location: "Faridabad",
    accreditation: "NABH Accredited",
    specialties: "Cardiac Sciences, Critical Care",
    image: "../../public/Hospital/9.webp",
  },
  {
    name: "Metro Heart Institute with Multispeciality",
    location: "Faridabad",
    accreditation: "NABH Accredited",
    specialties: "Cardiology, Cardiac Surgery",
    image: "../../public/Hospital/10.jpg",
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
