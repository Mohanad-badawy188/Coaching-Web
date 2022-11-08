import React from "react";
import styled from "styled-components";
import SectionFourProps from "./SectionFourProps";
import FirstUser from "../../pics/FirstUser.png";
import SecondUser from "../../pics/SecondUser.png";
import ThirdUser from "../../pics/ThirdUser.png";
const Container = styled.div`
  height: 663px;
  background: #f7fff6;
  @media (max-width: 850px) {
    height: 1350px;
  }
`;
const Heading = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
`;
const Header = styled.div`
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 35px;
  line-height: 52px;
  text-align: center;
  color: #000033;
  width: 50%;
  margin: 0px auto 40px auto;
`;
const CartContainer = styled.div`
  @media (max-width: 850px) {
    display: block;

  }
  display: flex;
  margin: 75px 0px;
  justify-content: space-around;
`;

function SectionFour() {
  return (
    <Container>
      <Heading>
        <Header>What our customers say about us</Header>
      </Heading>
      <CartContainer>
        <SectionFourProps
          img={FirstUser}
          name={"ChiChi"}
          country={"South Africa"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
        <SectionFourProps
          img={SecondUser}
          name={"Queen Rita "}
          country={"USA"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
        <SectionFourProps
          img={ThirdUser}
          name={"Gloria Uko"}
          country={"Nigeria"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
      </CartContainer>
    </Container>
  );
}

export default SectionFour;
