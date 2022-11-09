import React from "react";
import styled from "styled-components";
import { Container, Wrap } from "../Home";
import {
  Heading,
  LeftSide,
  Text,
} from "../homePageSections/SectionOneLeftSide";
import {
  CupPic,
  Dots,
  RightSide,
} from "../homePageSections/SectionOneRightSide";
import Img from "../../pics/happy-couple-looking-laptop.png";
import Dot from "../../pics/dots.png";

function FirstSection() {
  return (
    <Container>
      <Wrap>
        <LeftSide>
          <Heading>We Provide Virtual Coaching services</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna,
            eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna
            at, gravida commodo mauris. Quisque ac felis ac sapien dictum
            gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin
            posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex
            rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.
          </Text>
        </LeftSide>
        <RightSide>
          <CupPic src={Img} />

          <Dots src={Dot} />
        </RightSide>
      </Wrap>
    </Container>
  );
}

export default FirstSection;
