import React from "react";
import styled from "styled-components";
import { Btn } from "./homePageSections/SectionOneLeftSide";
import Fetti from "../pics/fetti.png";
const Container = styled.div`
  height: 100vh;
  background: #f7fff6;
`;
const Wrap = styled.div`
  padding-top: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  @media (max-width: 1000px) {
    height: 700px;
  }
`;
const Header = styled.div`
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 45px;
  line-height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000033;
`;
const HeaderImg = styled.img``;
const Text = styled.div`
  font-family: "Ubuntu";
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  justify-content: center;
  display: flex;
  width: 40%;
  margin: 0px auto;

  color: #000033;
`;
const DarkText = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;
const BTN = styled.div``;
function ThankYou() {
  return (
    <Container>
      <Wrap>
        <Header>
          <HeaderImg src={Fetti} /> CONGRATULATIONS !!!{" "}
          <HeaderImg src={Fetti} />{" "}
        </Header>
        <Text>
          You have successfully registered for the webinar “How to understand
          your spouse better towards a blissful union” by Jo-Jean Imoh-Ita
        </Text>

        <DarkText>
          You will receive and email within 24 hours with the link to access the
          webinar.
        </DarkText>
        <Text>
          The webinar is hosted on the ZOOM platform. Looking forward to having
          you.
        </Text>
        <Text>Thank you!</Text>
        <BTN>
          <Btn> Go Back Home</Btn>
        </BTN>
      </Wrap>
    </Container>
  );
}

export default ThankYou;
