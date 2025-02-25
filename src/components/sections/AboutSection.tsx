
import { Shield, Award, Users, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="FayaDeen"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent rounded-b-2xl">
                <p className="text-white text-lg font-semibold">FayaDeen</p>
                <p className="text-white/90">CEA Reg No. RO55864A</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl text-primary mb-6">About FayaDeen</h2>
                <p className="text-primary/80 mb-6 leading-relaxed">
                  Are you looking to buy, sell, or rent a property in Singapore? You're in the right place! I am FayaDeen, a CEA-registered real estate agent committed to helping you navigate the dynamic Singapore property market with ease and confidence.
                </p>
                <p className="text-primary/80 mb-6 leading-relaxed">
                  With years of experience and in-depth market knowledge, I specialize in residential and commercial real estate transactions, ensuring my clients receive personalized solutions tailored to their needs.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-2xl text-primary mb-4">Services I Offer</h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 text-primary/80">
                    <div className="bg-secondary/20 p-2 rounded-lg">
                      <Shield className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Buying & Selling Homes</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary/80">
                    <div className="bg-secondary/20 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Property Investment Consultation</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary/80">
                    <div className="bg-secondary/20 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Rental & Leasing Services</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-2xl text-primary mb-4">Contact Me</h3>
                <div className="flex items-center gap-4 text-primary/80">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href="tel:+6596734356" className="hover:text-secondary transition-colors">+65 9673 4356</a>
                </div>
                <div className="flex items-center gap-4 text-primary/80">
                  <Mail className="h-5 w-5 text-secondary" />
                  <a href="mailto:m.fayajudeen85@gmail.com" className="hover:text-secondary transition-colors">m.fayajudeen85@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
