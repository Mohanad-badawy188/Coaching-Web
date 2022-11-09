import React from "react";
import {
  Container,
  Dots,
  LeftSide,
  RightSide,
  SectionTwoPic,
  Texts,
} from "../homePageSections/SectionTwo";
import LeanOn from "../../pics/LeanOn.png";
import Dot from "../../pics/dots.png";
import { Heading } from "../homePageSections/SectionOneLeftSide";

function SectionTwo() {
  return (
    <Container>
      <LeftSide>
        <SectionTwoPic src={LeanOn} />
        <Dots src={Dot} />
      </LeftSide>
      <RightSide>
        <Heading style={{ marginTop: "80px" }}>
          We Provide Post & Pre Marital Coaching
        </Heading>
        <Texts>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
          et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu
          pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at,
          gravida commodo mauris. Quisque ac felis ac sapien dictum gravida
          aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et
          metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In
          venenatis nisi orci, non accumsan nisl tempus ut.
        </Texts>
      </RightSide>
    </Container>
  );
}

export default SectionTwo;
