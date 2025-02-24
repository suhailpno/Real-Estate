
import { Star } from 'lucide-react';

export const PropertiesSection = () => {
  const properties = [
    {
      type: "HDB",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      price: "SGD 500,000 - 800,000",
      location: "Tampines, Punggol, Sengkang"
    },
    {
      type: "Condominium",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      price: "SGD 1.2M - 3M",
      location: "River Valley, Orchard, Newton"
    },
    {
      type: "Landed",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      price: "SGD 3M - 10M",
      location: "Siglap, Bukit Timah, Holland"
    }
  ];

  return (
    <section id="properties" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="font-display text-4xl text-primary mb-12 text-center">
          Featured Properties
        </h2>
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.type} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.type}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl">{property.type} Properties</h3>
                  <div className="flex items-center text-secondary">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-primary font-semibold mb-4">{property.price}</p>
                <button className="text-primary font-semibold hover:text-secondary transition-colors duration-300 flex items-center">
                  View Listings
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
