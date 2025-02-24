
import { Shield, Award, Users } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-accent">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Mohamed Fiajudeen"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-semibold">Mohamed Fiajudeen</p>
                <p className="text-white/80">Senior Property Consultant</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl text-white mb-6">
                  Your Trusted Property Expert
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  With over a decade of experience in Singapore's real estate market, I specialize in helping clients find their perfect home across HDB, private condominiums, and landed properties.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-white/80">Properties Sold</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <span>CEA Licensed Property Agent</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <span>Specializing in Premium Properties</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <span>Multilingual: English, Malay, Tamil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
