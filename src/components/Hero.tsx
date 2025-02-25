
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571984405176-5958bd9ac31d"
          alt="Luxury Property"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-7xl text-primary mb-6 animate-fade-in leading-tight">
            Welcome to <span className="text-secondary">FayaDeen Realty</span>
          </h1>
          <p className="text-primary/80 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in">
            Your Trusted Singapore Real Estate Partner – Where Dreams Find Their Perfect Home
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in">
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105">
              Contact Me
            </Button>
            <Button variant="outline" className="bg-background/50 backdrop-blur-md border-secondary text-primary px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
