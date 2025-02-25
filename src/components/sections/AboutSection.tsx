
import { Shield, Award, Users, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="FayaDeen"
                className="rounded-2xl w-full object-cover aspect-[3/4] hover-up shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-2xl font-display mb-2">Mohamed FayaDeen</p>
                <p className="text-white/90 mb-4">Senior Property Consultant</p>
                <p className="text-secondary font-medium tracking-wide">CEA Reg No. RO55864A</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl text-gradient mb-8">About FayaDeen</h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Are you looking to buy, sell, or rent a property in Singapore? You're in the right place! I am FayaDeen, a CEA-registered real estate agent committed to helping you navigate the dynamic Singapore property market with ease and confidence.
                </p>
                <p className="text-white/90 mb-6 leading-relaxed">
                  With years of experience and in-depth market knowledge, I specialize in residential and commercial real estate transactions, ensuring my clients receive personalized solutions tailored to their needs.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="glass-card p-6 rounded-xl hover-up">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl text-white font-medium">Buying & Selling</h3>
                  </div>
                  <p className="text-white/90 pl-16">Expert guidance for all property transactions</p>
                </div>

                <div className="glass-card p-6 rounded-xl hover-up">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl text-white font-medium">Investment Consultation</h3>
                  </div>
                  <p className="text-white/90 pl-16">Strategic advice for maximum returns</p>
                </div>

                <div className="glass-card p-6 rounded-xl hover-up">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl text-white font-medium">Rental Services</h3>
                  </div>
                  <p className="text-white/90 pl-16">Comprehensive leasing solutions</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl space-y-6">
                <h3 className="text-xl text-white font-medium mb-6">Get in Touch</h3>
                <a href="tel:+6596734356" className="flex items-center gap-4 text-white/90 hover:text-secondary transition-colors group">
                  <div className="bg-secondary/20 p-3 rounded-lg group-hover:bg-secondary/30 transition-colors">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  +65 9673 4356
                </a>
                <a href="mailto:m.fayajudeen85@gmail.com" className="flex items-center gap-4 text-white/90 hover:text-secondary transition-colors group">
                  <div className="bg-secondary/20 p-3 rounded-lg group-hover:bg-secondary/30 transition-colors">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  m.fayajudeen85@gmail.com
                </a>
                <div className="flex items-center gap-4 pt-2">
                  <a href="#" className="bg-secondary/20 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <Facebook className="h-5 w-5 text-secondary" />
                  </a>
                  <a href="#" className="bg-secondary/20 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <Instagram className="h-5 w-5 text-secondary" />
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
