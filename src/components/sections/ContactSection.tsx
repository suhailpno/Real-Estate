
import { Button } from "../ui/button";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-accent">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl text-primary mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Message</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-32"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a href="tel:+6500000000" className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 group">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <span className="ml-4">+65 0000 0000</span>
                  </a>
                  <a href="mailto:mohamed@example.com" className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 group">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <span className="ml-4">mohamed@example.com</span>
                  </a>
                  <a href="https://wa.me/+6500000000" className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 group">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <span className="ml-4">WhatsApp</span>
                  </a>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white rounded-lg overflow-hidden h-64 shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036273116!2d103.70416557306643!3d1.3139961237202297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1644856207175!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
