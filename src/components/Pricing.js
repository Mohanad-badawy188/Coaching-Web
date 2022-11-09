import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FourthSection from "./PricingPageSections/FourthSection";
import SectionOne from "./PricingPageSections/SectionOne";
import SectionSeven from "./PricingPageSections/SectionSeven";
import SectionSix from "./PricingPageSections/SectionSix";
import SectionThree from "./PricingPageSections/SectionThree";
import SectionTwo from "./PricingPageSections/SectionTwo";
import SectionFour from "./WebinarPageSections/SectionFour";

function Pricing() {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <FourthSection />
      <SectionFour
        header={
          <div>
            Here are our clients <br />
            testimonials
          </div>
        }
      />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </div>
  );
}

export default Pricing;
