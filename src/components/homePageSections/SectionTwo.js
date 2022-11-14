import React from "react";
import styled from "styled-components";
import AfroAmercancafe from "../../pics/afro-amercan-cafe.png";
import VectorImg from "../../pics/Vector.png";
import { Btn } from "../Header";
import Dot from "../../pics/dots.png";

export const Container = styled.div`
  height: 798px;
  background: #f7fff6;
  display: flex;

  @media (max-width: 1200px) {
    display: block;
    height: 1400px;
  }
  @media (max-width: 750px) {
    display: block;
    height: 1500px;
  }
  @media (max-width: 500px) {
    display: block;
    height: 1200px;
  }
`;
export const LeftSide = styled.div`
  display: flex;

  flex: 1;
  margin-bottom: 25px;
  position: relative;
`;
export const SectionTwoPic = styled.img`
  border-radius: 213.53px 0px 218.78px 216px;
  z-index: 1;
  width: 518px;
  height: 537px;
  margin-top: 200px;
  margin-left: 120px;
  @media (max-width: 750px) {
    height: 400px;
    width: 400px;
  }
  @media (max-width: 500px) {
    height: 200px;
    width: 200px;
  }
`;
export const Dots = styled.img`
  position: absolute;
  top: 200px;
  left: 125px;
  z-index: 0;
  @media (max-width: 1200px) {
    top: 205px;
  }

  @media (max-width: 500px) {
    height: 150px;
    width: 150px;
  }
`;
export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 200px;
`;
export const Header = styled.div`
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
export const Texts = styled.div`
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
        <Dots src={Dot} />
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
