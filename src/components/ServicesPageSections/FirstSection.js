import React from "react";
import styled from "styled-components";
import {  Wrap } from "../Home";
import {
  Heading,
  LeftSide,

} from "../homePageSections/SectionOneLeftSide";
import {
  CupPic,
  Dots,
  RightSide,
} from "../homePageSections/SectionOneRightSide";
import Img from "../../pics/happy-couple-looking-laptop.png";
import Dot from "../../pics/dots.png";
const Container = styled.div`
height: 800px;
@media (max-width: 1200px) {
    height: 1200px;
  }
@media (max-width: 600px) {
    height: 1400px;
  }
`
const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 625px;
  height: 52px;
  margin: 35px 0px;

  font-family: "Ubuntu";
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;

  color: #000033;
  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    width: 650px;
    margin-bottom: 60px;
    text-align: center;
  }
  @media (max-width: 900px) {
    width: 430px;
    margin-bottom: 60px;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 200px;
    padding-bottom: 320px;
    text-align: center;
  }

  `

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
