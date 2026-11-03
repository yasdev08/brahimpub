import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedSection from "@/components/FeaturedSection";
import DigitalSection from "@/components/DigitalSection";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "MB PUB | Publicité, Impression & Enseignes à Oran",
  description:
    "MB PUB, agence de publicité et communication visuelle à Oran. Enseignes publicitaires, impression numérique, grand format, design graphique et solutions digitales pour les professionnels.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MB PUB | Publicité, Impression & Enseignes à Oran",
    description:
      "Enseignes publicitaires, impression, grand format et solutions digitales pour les entreprises d'Oran.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <FeaturedSection />
        <DigitalSection />
        <Portfolio />
        <WhyUs />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
