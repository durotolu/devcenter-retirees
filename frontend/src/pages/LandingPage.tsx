import React from "react";
import Header from "../components/Header";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import DataSection from "../components/DataSection";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <FeatureSection />
      <main className="py-12">
        <DataSection />
        {/* <section className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-green-700">
            Retiree Data Processing Made Easy!
          </h1>
          <p className="text-gray-600 mt-4">
            Whether you're a retiree claiming your benefits or an employer
            submitting employee data for verification, our secure platform
            provides a seamless experience.
          </p>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
