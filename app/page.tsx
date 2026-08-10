import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedSection from "@/components/FeaturedSection";
import DigitalSection from "@/components/DigitalSection";
import ProcessSection from "@/components/ProcessSection";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <FeaturedSection />
        <DigitalSection />
        <ProcessSection />
        <Portfolio />
        <WhyUs />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
