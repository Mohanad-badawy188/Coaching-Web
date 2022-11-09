import React from "react";
import styled from "styled-components";
import { CartContainer } from "../CustomerReviews";
import { Cart } from "../CustomerReviewsProps";
import Msg from "../../pics/msg.png";
import Phone from "../../pics/phone.png";
import Location from "../../pics/location.png";
const Container = styled.div`
  height: 500px;
  background: #f7fff6;
  @media (max-width: 850px) {
    height: 800px;
  }
`;
const Header = styled.div`
  text-align: center;
  color: black;

  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  color: #000033;
`;
const Text = styled.div`
  text-align: center;
  margin: 0px auto;
  width: 60%;
  display: flex;
  @media (max-width: 500px) {
    width: 100%;
    text-align: start;
  }
  font-family: "Ubuntu";
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  align-items: center;
  color: #000033;
  position: relative;
`;
const Icon = styled.img`
  margin-right: 10px;
`;
const IconRight = styled.img`
  position: absolute;
  top: 5px;
`;
function SectionTwo() {
  return (
    <Container>
      <CartContainer style={{ paddingTop: "100px" }}>
        <Cart>
          <Header>Get in Touch</Header>
          <Text>
            <Icon src={Msg} /> glorynwokocha99@gmail.com
          </Text>
          <Text>
            <Icon src={Phone} />
            +234 806 774 735{" "}
          </Text>
        </Cart>
        <Cart>
          <Header>Location</Header>
          <Text>
            <IconRight src={Location} /> 88/89 Peter Odili Road, Port Harcourt,
            Rivers State.
          </Text>
        </Cart>
      </CartContainer>
    </Container>
  );
}

export default SectionTwo;
