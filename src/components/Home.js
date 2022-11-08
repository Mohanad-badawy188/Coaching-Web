import React from "react";
import Header from "./Header";
import styled from "styled-components";

import SectionOneLeftSide from "./homePageSections/SectionOneLeftSide";
import SectionOneRightSide from "./homePageSections/SectionOneRightSide";
import SectionTwo from "./homePageSections/SectionTwo";
import SectionThree from "./homePageSections/SectionThree";
import CustomerReviews from "./CustomerReviews";
import Subscription from "./Subscription";

const Container = styled.div`
  @media (max-width: 1200px) {
    height: 1200px;
  }
  @media (max-width: 750px) {
    height: 1300px;
  }

  height: 900px;
`;
const Wrap = styled.div`
  @media (max-width: 1200px) {
    text-align: center;

    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  display: flex;
  height: 100%;
  margin: 0 60px;
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
    </div>
  );
}

export default Home;
