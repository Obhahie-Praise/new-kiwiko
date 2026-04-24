import Features from "@/components/homepage/Features";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import Navbar from "@/components/homepage/Navbar";
import Waitlist from "@/components/homepage/Waitlist";
import { Spotlight } from "@/components/ui/spotlight";

const HomePage = () => {
  return (
    <div>
      <Spotlight fill="white" />
      <div className="">
        <Navbar />
      </div>
      <div className="px-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Waitlist />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
