import React from "react";
import Header from "./Header";
import styled from "styled-components";

import SectionOneLeftSide from "./homePageSections/SectionOneLeftSide";
import SectionOneRightSide from "./homePageSections/SectionOneRightSide";
import SectionTwo from "./homePageSections/SectionTwo";
import SectionThree from "./homePageSections/SectionThree";
import CustomerReviews from "./CustomerReviews";
import Subscription from "./Subscription";
import Footer from "./Footer";

export const Container = styled.div`
  @media (max-width: 1200px) {
    height: 1300px;
  }
  @media (max-width: 750px) {
    height: 1500px;
  }

  height: 900px;
`;
export const Wrap = styled.div`
  @media (max-width: 1200px) {
    text-align: center;

    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  display: flex;

  justify-content: space-between;
  height: 100%;
  margin: 0 80px;
`;

function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Wrap>
          <SectionOneLeftSide />
          <SectionOneRightSide />
        </Wrap>
      </Container>
      <SectionTwo />
      <SectionThree />
      <CustomerReviews />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;
