
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Property Investor",
      text: "Mohamed's expertise in the luxury market is unmatched. He helped us secure our dream penthouse with exceptional negotiation skills.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "First-time Buyer",
      text: "The attention to detail and personalized service made our first property purchase a smooth and enjoyable experience.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5
    },
    {
      name: "Lisa Zhang",
      role: "Home Owner",
      text: "From start to finish, the process was seamless. Mohamed's market knowledge and professionalism are truly outstanding.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4 text-center">
          Client Testimonials
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Hear what our satisfied clients have to say about their experience
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-accent p-8 rounded-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Quote className="h-8 w-8 text-secondary mb-6" />
              <p className="text-white/80 italic mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
