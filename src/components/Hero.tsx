
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient mb-6 animate-fade-in leading-tight tracking-tight">
            Welcome to <br/><span className="text-gradient-gold">FayaDeen Realty</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in max-w-2xl mx-auto">
            Your Trusted Singapore Real Estate Partner – Where Dreams Find Their Perfect Home
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in">
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-lg text-lg w-full md:w-auto hover-up group shadow-lg shadow-secondary/20">
              Discover Properties
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="glass-card text-white border-white/20 px-8 py-6 rounded-lg text-lg w-full md:w-auto hover-up">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12 z-10">
        <div className="grid grid-cols-3 gap-8 glass-card p-8 rounded-2xl mx-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-gold mb-2">500+</div>
            <div className="text-white/90 text-sm font-medium">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-gold mb-2">10+</div>
            <div className="text-white/90 text-sm font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-gold mb-2">98%</div>
            <div className="text-white/90 text-sm font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};
