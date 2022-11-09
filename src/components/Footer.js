import React from "react";
import styled from "styled-components";
import DarkLogo from "../pics/darkLogo.png";
import Twitter from "../pics/twitter.png";
import Face from "../pics/face.png";
import Insta from "../pics/insta.png";
import Linkedin from "../pics/linkedin.png";
const Container = styled.div`
  height: 477px;
  background: rgba(0, 0, 51, 1);
  @media (max-width: 750px) {
    height: 600px;
  }
  @media (max-width: 500px) {
    height: 1000px;
  }
`;
const Wrap = styled.div`
  @media (max-width: 500px) {
    display: block;
  }
  display: flex;
  margin: 20px 50px;
  align-items: center;
`;
const FirstPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Logo = styled.img`
  width: 200px;
  height: 200px;
`;
const Location = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 40%;
  right: 110px;
  bottom: -10px;
  @media (max-width: 1100px) {
    bottom: -50px;
  }
  @media (max-width: 750px) {
    bottom: -100px;
  }
`;
const SecondPart = styled.div`
  flex: 1;
  display: flex;

  margin-top: 90px;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 750px) {
    display: block;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 165px;
  justify-content: space-between;
  margin-top: 45px;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 165px;
  justify-content: space-between;
  margin-top: 45px;
`;
const Item = styled.div`
  cursor: pointer;
  font-family: "Mulish";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: #ffffff;

  flex-grow: 0;
  &:hover {
    border-bottom: white 3px solid;
    font-weight: 600;
  }
`;
const ThirdPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  flex-wrap: wrap;
`;
const Header = styled.div`
  color: white;
  text-align: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  margin-bottom: 50px;
`;
const Icons = styled.div`
  @media (max-width: 750px) {
    display: block;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  @media (max-width: 750px) {
    margin-top: 20px;
  }

  cursor: pointer;
  margin: 2px 25px;
  &:hover {
    border-bottom: white 3px solid;
    font-weight: 600;
  }
`;
const CopyRights = styled.div`
  margin-top: 100px;
  justify-content: center;
  font-family: "Mulish";
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  display: flex;

  color: #ffffff;
`;

function Footer() {
  return (
    <Container>
      <Wrap>
        <FirstPart>
          <Logo src={DarkLogo} />
          <Location>
            88/89 Peter Odili Road, Port Harcourt, Rivers State.
          </Location>
        </FirstPart>
        <SecondPart>
          <LeftSide>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Sign Up</Item>
          </LeftSide>
          <RightSide>
            <Item>Services</Item>
            <Item>Contact</Item>
            <Item>Privacy Policy</Item>
          </RightSide>
        </SecondPart>
        <ThirdPart>
          <Header>Connect With Us</Header>
          <Icons>
            <Icon src={Twitter} />
            <Icon src={Face} />
            <Icon src={Insta} />
            <Icon src={Linkedin} />
          </Icons>
        </ThirdPart>
      </Wrap>
      <CopyRights>
        © Jo-Jean Imoh-Ita. All right reserved. Designed by AMANi Art
      </CopyRights>
    </Container>
  );
}

export default Footer;
