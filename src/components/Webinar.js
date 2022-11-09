import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Wrap } from "./Home";
import {
  Btn,
  Heading,
  LeftSide,
  Text,
} from "./homePageSections/SectionOneLeftSide";
import SectionOneRightSide from "./homePageSections/SectionOneRightSide";
import SectionFive from "./WebinarPageSections/SectionFive";
import SectionFour from "./WebinarPageSections/SectionFour";
import SectionThree from "./WebinarPageSections/SectionThree";
import SectionTwo from "./WebinarPageSections/SectionTwo";

function Webinar() {
  return (
    <div>
      <Container>
        <Header />
        <Wrap>
          <LeftSide>
            <Heading>Don't miss this amazing webinar!</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur justo quis euismod vehicula. Quisque diam dui,
              imperdiet et hendrerit in, accumsan tempus erat.
            </Text>
            <Btn style={{ width: "200px" }}>Reserve Your Spot</Btn>
          </LeftSide>
          <SectionOneRightSide />
        </Wrap>
      </Container>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default Webinar;
