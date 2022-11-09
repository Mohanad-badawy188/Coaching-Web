import React from "react";
import SecondSection from "./AboutPageSectins/SecondSection";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import Header from "./Header";
import FirstSection from "./ServicesPageSections/FirstSection";
import SectionTwo from "./ServicesPageSections/SectionTwo";
import Subscription from "./Subscription";

function Services() {
  return (
    <div>
      <Header />
      <FirstSection />
      <SectionTwo />
      <SecondSection backGroundColor="white" />
      <CustomerReviews />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Services;
