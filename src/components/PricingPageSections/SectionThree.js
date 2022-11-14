import React from "react";
import styled from "styled-components";
import Vector from "../../pics/Vector.png";
import { Btn } from "../Header";
const Container = styled.div`
  height: 1100px;

  @media (max-width: 1000px) {
    height: 1450px;
  }
  @media (max-width: 750px) {
    height: 1600px;
  }
  @media (max-width: 450px) {
    height: 2000px;
  }
`;

export const Header = styled.div`
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 50px;
  line-height: 65px;

  width: 45%;
  margin: 100px auto 30px;
  text-align: center;

  color: #000033;
  @media (max-width: 1000px) {
width: 70%;
margin-bottom: 300px;

  }
`;
const Text = styled.div`
  font-family: "Ubuntu";
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #000033;
  @media (max-width: 1000px) {
margin-bottom: 200px;

  }
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  margin-top: 100px;

`;
export const Item = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  width: 40%;
  margin: 0px auto;
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  color: #000033;
  @media (max-width: 1000px) {
    width: 60%;
  margin-top: 50px;

  }

  @media (max-width: 600px) {
    width: 90%;
  }

`;
export const Icon = styled.img`
  margin-right: 20px;
`;
export const BTN = styled.div`
  margin-top: 100px;
  text-align: center;
  @media (max-width: 1000px) {
  margin-top: 220px;

  }
  @media (max-width: 450px) {

  margin-top: 350px;

  }
`;

function SectionThree() {
  return (
    <Container>
      <Header>Are You Having issues in your Marriage and relationship</Header>
      <Text>
        Does any of this suituation discribs you ? Feel Free to Contact Us{" "}
      </Text>
      <Items>
        <Item>
          <Icon src={Vector} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
          urna et diam Lorem ipsum dolor sit amet
        </Item>
        <Item>
          <Icon src={Vector} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
          urna et diam Lorem ipsum dolor sit amet
        </Item>
        <Item>
          <Icon src={Vector} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
          urna et diam Lorem ipsum dolor sit amet
        </Item>
        <Item>
          <Icon src={Vector} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
          urna et diam Lorem ipsum dolor sit amet
        </Item>
      </Items>
      <BTN>
        {" "}
        <Btn>Get Started</Btn>
      </BTN>
    </Container>
  );
}

export default SectionThree;
