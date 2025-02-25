
import { Star, MapPin, Building2, Home } from 'lucide-react';

export const PropertiesSection = () => {
  const services = [
    {
      title: "Market Insights & Valuation",
      icon: Building2,
      description: "Get accurate property evaluations and stay updated with the latest market trends."
    },
    {
      title: "Legal & Financial Assistance",
      icon: Home,
      description: "Connect with trusted mortgage advisors and legal professionals for a seamless transaction."
    }
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-4 text-center">
          Why Choose Me?
        </h2>
        <p className="text-primary/80 text-center mb-12 max-w-2xl mx-auto">
          Your property journey deserves the best guidance and expertise
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="group bg-muted rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl text-primary">{service.title}</h3>
              </div>
              <p className="text-primary/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl text-primary mb-4">
            Let's Make Your Property Journey Smooth & Successful!
          </h3>
          <p className="text-primary/80 mb-8">
            Whether you're looking for your dream home, the best investment opportunity, or expert advice on property transactions, I'm here to help.
          </p>
        </div>
      </div>
    </section>
  );
};
