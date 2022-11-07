import React from "react";
import styled from "styled-components";
import AfroAmercancafe from "../../pics/afro-amercan-cafe.png";
import VectorImg from "../../pics/Vector.png";
import { Btn } from "../Header";
const Container = styled.div`
  height: 798px;
  background: #f7fff6;
  display: flex;

  @media (max-width: 1200px) {
    display: block;
    height: 1200px;
  }
`;
const LeftSide = styled.div`
  display: flex;

  flex: 1;
  margin-bottom: 25px;
`;
const SectionTwoPic = styled.img`
  margin: auto;
  border-radius: 213.53px 0px 218.78px 216px;
`;
const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 200px;
`;
const Header = styled.div`
  @media (max-width: 1200px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  color: #000033;
`;
const Texts = styled.div`
  @media (max-width: 1200px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  font-family: "Ubuntu";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  width: 70%;
  color: rgba(0, 0, 51, 0.95);
  margin-top: 20px;
`;
const ServicesUl = styled.ul`
  margin-bottom: 30px;
`;
const ServiceLi = styled.li`
  @media (max-width: 1200px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  list-style: none;
  display: flex;
  margin-top: 20px;
  align-items: center;
`;
const Vector = styled.img`
  margin-right: 8px;
  height: 15px;
  width: 15px;

  border-radius: 0px;
`;
const ServiceText = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: rgba(0, 0, 51, 0.9);
`;
const BTN = styled.div`
  @media (max-width: 1200px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
function SectionTwo() {
  return (
    <Container>
      <LeftSide>
        <SectionTwoPic src={AfroAmercancafe} />
      </LeftSide>
      <RightSide>
        <Header>We offer the best services</Header>
        <Texts>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
          et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna.
        </Texts>
        <ServiceLi>
          <Vector src={VectorImg} />{" "}
          <ServiceText>Post Marital Coaching</ServiceText>
        </ServiceLi>
        <ServiceLi>
          <Vector src={VectorImg} />{" "}
          <ServiceText>Post Marital Coaching</ServiceText>
        </ServiceLi>
        <ServiceLi>
          <Vector src={VectorImg} />{" "}
          <ServiceText>Post Marital Coaching</ServiceText>
        </ServiceLi>
        <ServicesUl></ServicesUl>
        <BTN>
          <Btn>Book Now</Btn>
        </BTN>
      </RightSide>
    </Container>
  );
}

export default SectionTwo;
