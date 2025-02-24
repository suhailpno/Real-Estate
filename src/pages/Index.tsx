
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatsappButton } from "@/components/WhatsappButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatsappButton />
    </div>
  );
};

export default Index;
