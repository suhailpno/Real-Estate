
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      property: "Condo in River Valley",
      text: "Mohamed helped us find our dream condo in River Valley. His knowledge of the market and negotiation skills were invaluable.",
      image: "https://source.unsplash.com/200x200/?woman,professional"
    },
    {
      name: "Raj Kumar",
      property: "HDB in Tampines",
      text: "Excellent service! Mohamed made the entire HDB buying process smooth and stress-free. Highly recommended!",
      image: "https://source.unsplash.com/200x200/?man,professional"
    },
    {
      name: "Lisa Wong",
      property: "Landed Property in Siglap",
      text: "Mohamed's expertise in landed properties helped us secure our perfect family home. His attention to detail is outstanding.",
      image: "https://source.unsplash.com/200x200/?woman,business"
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.property}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
