import React from "react";
import { Container, Wrap } from "../Home";
import Dot from "../../pics/dots.png";
import cuppic from "../../pics/afro-amercan-cafe.png";

import {
  Btn,
  Heading,
  LeftSide,
  Text,
} from "../homePageSections/SectionOneLeftSide";
import {
  CupPic,
  Dots,
  RightSide,
} from "../homePageSections/SectionOneRightSide";

function SectionOne() {
  return (
    <Container>
      <Wrap>
        <LeftSide>
          <Heading>Give your Marriage and Relationship the best.</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat.
          </Text>
          <Btn>Get Started</Btn>
        </LeftSide>
        <RightSide>
          <CupPic src={cuppic} />
          <Dots src={Dot} />
        </RightSide>
      </Wrap>
    </Container>
  );
}

export default SectionOne;
