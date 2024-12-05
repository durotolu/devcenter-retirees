import React from "react";
import Header from "../components/Header";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import DataSection from "../components/DataSection";
import HowItWorksSection from "../components/HowItWorksSection";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <FeatureSection />
      <main className="pt-12">
        <DataSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
