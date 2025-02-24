
import { Search } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl text-white mb-6 animate-fade-in">
          Find Your Dream Home in Singapore
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
          Expert guidance for HDB, Condo, and Landed Properties
        </p>

        {/* Search Bar */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg max-w-3xl mx-auto animate-fade-in shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <select className="flex-1 p-3 rounded border border-gray-200 focus:outline-none focus:border-primary">
              <option>All Properties</option>
              <option>HDB</option>
              <option>Condo</option>
              <option>Landed</option>
            </select>
            <select className="flex-1 p-3 rounded border border-gray-200 focus:outline-none focus:border-primary">
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
            <Button className="bg-primary hover:bg-primary/90 px-8 transition-all duration-300 transform hover:scale-105">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
