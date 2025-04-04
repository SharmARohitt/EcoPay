
import React from "react";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import WasteCategories from "@/components/WasteCategories";
import TechFeatures from "@/components/TechFeatures";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import BusinessPartners from "@/components/BusinessPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HomeHero />
        <HowItWorks />
        <WasteCategories />
        <TechFeatures />
        <Testimonials />
        <BusinessPartners />
        <DownloadCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
