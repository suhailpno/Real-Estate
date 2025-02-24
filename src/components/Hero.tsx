
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

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-7xl text-white mb-6 animate-fade-in leading-tight">
            Your Journey to the <span className="text-secondary">Perfect Home</span> Starts Here
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in">
            Discover exceptional properties across Singapore, from luxurious condominiums to charming landed homes, guided by expertise and excellence.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in">
            <a 
              href="#properties"
              className="inline-block px-8 py-4 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Explore Properties
            </a>
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
