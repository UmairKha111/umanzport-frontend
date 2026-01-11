import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
