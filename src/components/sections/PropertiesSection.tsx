
export const PropertiesSection = () => {
  return (
    <section id="properties" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="font-display text-4xl text-primary mb-12 text-center">
          Featured Properties
        </h2>
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Cards */}
          {["HDB", "Condominium", "Landed"].map((type) => (
            <div key={type} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={`https://source.unsplash.com/800x600/?apartment,${type.toLowerCase()}`}
                alt={type}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-xl mb-2">{type} Properties</h3>
                <p className="text-gray-600 mb-4">
                  Discover our selection of {type} properties in prime locations.
                </p>
                <button className="text-primary font-semibold hover:underline">
                  View Listings →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
