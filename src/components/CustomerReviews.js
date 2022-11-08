import React from "react";
import styled from "styled-components";
import CustomerReviewsProps from "./CustomerReviewsProps";
import FirstUser from "../pics/FirstUser.png";
import SecondUser from "../pics/SecondUser.png";
import ThirdUser from "../pics/ThirdUser.png";
import { Header, Heading } from "./homePageSections/SectionThree";
import Dot from '../pics/dots.png'

const Container = styled.div`
  height: 663px;
  background: #f7fff6;
  padding-top: 10px;
  @media (max-width: 850px) {
    height: 1350px;
  }
  position: relative;
  overflow: hidden;
`;

const CartContainer = styled.div`
  @media (max-width: 850px) {
    display: block;
  }
  display: flex;
  margin: 75px 0px;
  justify-content: space-around;

`;
const DotsTopRight = styled.img`
position: absolute;
top: -210px;
right: -60px;
z-index: 0;

  ` ;
const DotsBottomLeft = styled.img`
position: absolute;
bottom: -210px;
left: -60px;
z-index: 0;

  ` ;



function CustomerReviews() {
  return (
    <Container>
      <DotsTopRight src={Dot}/>
      <DotsBottomLeft src={Dot}/>
      <Heading>
        <Header>What our customers say about us</Header>
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
      </CartContainer>
    </Container>
  );
}

export default CustomerReviews;
