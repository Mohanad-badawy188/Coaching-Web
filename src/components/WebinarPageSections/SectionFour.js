import React from "react";
import {
  CartContainer,
  DotsBottomLeft,
  DotsTopRight,
} from "../CustomerReviews";
import { Header, Heading } from "../homePageSections/SectionThree";
import Dot from "../../pics/dots.png";
import CustomerReviewsProps from "../CustomerReviewsProps";
import FirstUser from "../../pics/FirstUser.png";
import SecondUser from "../../pics/SecondUser.png";
import ThirdUser from "../../pics/ThirdUser.png";
import styled from "styled-components";

const Container = styled.div`
  height: 1100px;
  background: ${(props) => props.backGroundColor};
  padding-top: 10px;
  @media (max-width: 1450px) {
    height: 1350px;
  }
  @media (max-width: 1000px) {
    height: 2450px;
  }

  position: relative;
  overflow: hidden;
`;
function SectionFour(props) {
  return (
    <Container backGroundColor={props.backGroundColor}>
      <DotsTopRight src={Dot} />
      <DotsBottomLeft src={Dot} />
      <Heading>
        <Header>{props.header}</Header>
      </Heading>
      <CartContainer>
        <CustomerReviewsProps
          img={FirstUser}
          name={"ChiChi"}
          country={"South Africa"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
        <CustomerReviewsProps
          img={SecondUser}
          name={"Queen Rita "}
          country={"USA"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
        <CustomerReviewsProps
          img={ThirdUser}
          name={"Gloria Uko"}
          country={"Nigeria"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
        <CustomerReviewsProps
          img={FirstUser}
          name={"ChiChi"}
          country={"South Africa"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
        <CustomerReviewsProps
          img={SecondUser}
          name={"Queen Rita "}
          country={"USA"}
          review={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et"
          }
        />
        <CustomerReviewsProps
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
