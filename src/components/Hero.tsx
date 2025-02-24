
import { Search, Home, Building2, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571984405176-5958bd9ac31d"
          alt="Luxury Property"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-display text-4xl md:text-7xl text-white mb-6 animate-fade-in">
          Discover Your <span className="text-secondary">Dream Home</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in">
          Expert guidance for luxury properties in Singapore's prime locations
        </p>

        <div className="bg-background/20 backdrop-blur-xl p-8 rounded-2xl max-w-4xl mx-auto animate-fade-in border border-white/10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Home className="absolute left-3 top-3 text-muted-foreground" />
              <select className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all">
                <option value="">All Properties</option>
                <option value="hdb">HDB</option>
                <option value="condo">Condo</option>
                <option value="landed">Landed</option>
              </select>
            </div>
            <div className="flex-1 relative">
              <Building2 className="absolute left-3 top-3 text-muted-foreground" />
              <select className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all">
                <option value="">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-muted-foreground" />
              <select className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all">
                <option value="">All Locations</option>
                <option value="central">Central</option>
                <option value="east">East</option>
                <option value="west">West</option>
              </select>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
