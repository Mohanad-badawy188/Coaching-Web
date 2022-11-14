import React from "react";
import styled from "styled-components";
import { BTN, Header, Icon, Item, Items } from "./SectionThree";
import Vector from "../../pics/Vector.png";
import { Btn } from "../Header";

const Container = styled.div`
  height: 1000px;
  background: #f7fff6;
  padding-top: 50px;
  @media (max-width: 1000px) {
    height: 1200px;
  }
  @media (max-width: 750px) {
    height: 1500px;
  }
`;

function SectionSix() {
  return (
    <Container>
      <Header>
        My Results has been <br />
        outstanding
      </Header>
      <Items style={{ height: "400px" }}>
        <Item>
          <Icon src={Vector} /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elited elementum urna et diam
        </Item>
        <Item>
          <Icon src={Vector} /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elited elementum urna et diam
        </Item>
        <Item>
          <Icon src={Vector} /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elited elementum urna et diam
        </Item>
        <Item>
          <Icon src={Vector} /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elited elementum urna et diam
        </Item>
        <Item>
          <Icon src={Vector} /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elited elementum urna et diam
        </Item>
        <Item>
          <Icon src={Vector} /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elited elementum urna et diam
        </Item>
      </Items>
      <BTN>
        <Btn style={{ width: "200px" }}>Get Started</Btn>
      </BTN>
    </Container>
  );
}

export default SectionSix;
