
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatsappButton } from "@/components/WhatsappButton";
import { PropertiesSection } from "@/components/sections/PropertiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PropertiesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsappButton />
    </div>
  );
};

export default Index;
