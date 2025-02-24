
import { Star, MapPin, Bed, Bath, Grid } from 'lucide-react';

export const PropertiesSection = () => {
  const properties = [
    {
      type: "Luxury Condo",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      price: "SGD 2.5M",
      location: "Orchard Road",
      beds: 3,
      baths: 2,
      sqft: "1,200"
    },
    {
      type: "Penthouse",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      price: "SGD 4.8M",
      location: "Marina Bay",
      beds: 4,
      baths: 3,
      sqft: "2,500"
    },
    {
      type: "Garden Villa",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      price: "SGD 6.2M",
      location: "Sentosa Cove",
      beds: 5,
      baths: 4,
      sqft: "3,800"
    }
  ];

  return (
    <section id="properties" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4 text-center">
          Featured Properties
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Discover our handpicked selection of premium properties in Singapore's most desirable locations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.type} className="group bg-accent rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.type}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl text-white">{property.type}</h3>
                  <div className="flex items-center text-secondary">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Bed className="h-4 w-4 mr-2" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Bath className="h-4 w-4 mr-2" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Grid className="h-4 w-4 mr-2" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-semibold text-lg">{property.price}</span>
                  <button className="text-white hover:text-secondary transition-colors duration-300 flex items-center font-semibold">
                    View Details
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
