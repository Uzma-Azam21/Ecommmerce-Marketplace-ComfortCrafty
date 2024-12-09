import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
import FeaturedProducts from "./featureProduct";
import Category from "./category";
import Explore from "./explore";
import OurProducts from "./ourProduct";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Company Logo Section */}
      <CompanyLogo />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Other Sections */}
      <Category />
      <Explore />
      <OurProducts />
    </main>
  );
}
