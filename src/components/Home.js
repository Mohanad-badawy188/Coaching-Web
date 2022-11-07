import React from "react";
import Header from "./Header";
import styled from "styled-components";

import SectionOneLeftSide from "./homePageSections/SectionOneLeftSide";
import SectionOneRightSide from "./homePageSections/SectionOneRightSide";

const Container = styled.div`
  height: 854px;
`;
const Wrap = styled.div`
  @media (max-width: 1200px) {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
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
    </div>
  );
}

export default Home;
