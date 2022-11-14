import React from "react";
import styled from "styled-components";
import { Heading, Text } from "../homePageSections/SectionOneLeftSide";
import { CupPic, RightSide } from "../homePageSections/SectionOneRightSide";
import CupPhoto from "../../pics/cuppic.png";
import Dot from "../../pics/dots.png";

const Container = styled.div`
  height: 650px;
  @media (max-width: 1200px) {
    height: 1400px;
  }
  @media (max-width: 650px) {
    height: 1700px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 55px;
  @media (max-width: 1200px) {
    text-align: center;

    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    margin-bottom: 100px;
    height: 700px;
  }
  @media (max-width: 650px) {
  margin-bottom: 200px;
  height: 1000px;
  justify-content: start;
  }

`;


export const Dots = styled.img`
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 0;
  @media (max-width: 1200px) {
    top: 20px;
  }
  @media (max-width: 500px) {
display: none;
  }
`;
function FirstSection() {
  return (
    <Container>
      <Wrap>
        <LeftSide>
          <Heading> Jean Joe - FOUNDER</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat.
      <br/>
      <br/>
      <br/>
            Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed
            justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque
            ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet
            ex vel ex sollicitudin posuere at et metus. Duis sodales ligula
            nisi, molestie lacinia ex rhoncus vel.

<br/>
<br/>
<br/>
<br/>
         Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed
            justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque
            ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet
            ex vel ex sollicitudin posuere at et metus. Duis sodales ligula
            nisi, molestie lacinia ex rhoncus vel.
          </Text>
        </LeftSide>
        <RightSide>
          <CupPic src={CupPhoto} />
          <Dots src={Dot} />
        </RightSide>
      </Wrap>
    </Container>
  );
}

export default FirstSection;
