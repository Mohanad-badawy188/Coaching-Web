import React from "react";
import styled from "styled-components";
import { Dots, LeftSide, Wrap } from "../AboutPageSectins/FirstSection";
import { Heading, Text } from "../homePageSections/SectionOneLeftSide";
import { CupPic, RightSide } from "../homePageSections/SectionOneRightSide";
import Dot from "../../pics/dots.png";
import CupPhoto from "../../pics/cuppic.png";

const Container = styled.div`
  background: #f7fff6;
  height: 1000px;
  padding-top: 100px;
  @media (max-width: 1200px) {
    height: 1400px;
  }
  @media (max-width: 600px) {
    height: 1800px;
  }
`;
function FourthSection() {
  return (
    <Container>
      <Wrap>
        <LeftSide>
          <Heading>Why I help Relationships & Marriages</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat.{" "}
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
            {" "}
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

export default FourthSection;
