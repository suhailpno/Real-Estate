
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      property: "Condo in River Valley",
      text: "Mohamed helped us find our dream condo in River Valley. His knowledge of the market and negotiation skills were invaluable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5
    },
    {
      name: "Raj Kumar",
      property: "HDB in Tampines",
      text: "Excellent service! Mohamed made the entire HDB buying process smooth and stress-free. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5
    },
    {
      name: "Lisa Wong",
      property: "Landed Property in Siglap",
      text: "Mohamed's expertise in landed properties helped us secure our perfect family home. His attention to detail is outstanding.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="font-display text-4xl text-primary mb-12 text-center">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-secondary"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.property}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
