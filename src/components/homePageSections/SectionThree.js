import React from "react";
import styled from "styled-components";
import Rectangle from "../../pics/Rectangle.png";
import { Btn } from "../Header";
const Container = styled.div`
  height: 880px;
`;
const Heading = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 52px;

  text-align: center;

  color: #000033;
  width: 70%;
  margin: 120px auto 40px auto;
`;
const Text = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  width: 80%;
  justify-content: center;
  margin: 0 auto;

  text-align: center;

  color: rgba(0, 0, 51, 0.95);
`;
const CartContainer = styled.div`
  display: flex;

  margin: 100px;
  justify-content: space-around;
  @media (max-width: 1200px) {
   display: block;
  }
`;
const Cart = styled.div`
margin:  30px 0px;
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  padding: 50px 40px;

`;
const Icon = styled.img`
  width: 65.1px;
  height: 53px;

  background: rgba(2, 152, 55, 0.1);
  border-radius: 6.54321px;
  margin-bottom: 30px;
`;
const CartHeading = styled.div`
  width: 204px;
  height: 30px;
  @media (max-width: 480px) {
    width:100px;
    margin-bottom: 20px;

  }
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  display: flex;
  align-items: center;

  color: #000033;
  margin-bottom: 20px;
`;
const CartText = styled.div`
  width: 315px;
  height: 104px;
  @media (max-width: 600px) {
    width:200px;
    margin-bottom: 20px;
    margin-top: 20px;

  }


  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 26px;

  color: rgba(0, 0, 51, 0.95);
`;
const CartBtn = styled.div`
  margin-top: 50px;
`;
function SectionThree() {
  return (
    <Container>
      <Heading>
        <Header>The Perfect Solution to your Relationship Issues</Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
          et hendrerit in, accumsan tempus{" "}
        </Text>
      </Heading>
      <CartContainer>
        <Cart>
          <Icon src={Rectangle} />
          <CartHeading> Pre Marital Coaching</CartHeading>
          <CartText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat.{" "}
          </CartText>
          <CartBtn>
            <Btn>Learn More</Btn>
          </CartBtn>
        </Cart>
        <Cart>
          <Icon src={Rectangle} />
          <CartHeading> Pre Marital Coaching</CartHeading>
          <CartText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat.{" "}
          </CartText>
          <CartBtn>
            <Btn>Learn More</Btn>
          </CartBtn>
        </Cart>
        <Cart>
          <Icon src={Rectangle} />
          <CartHeading> Pre Marital Coaching</CartHeading>
          <CartText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat.{" "}
          </CartText>
          <CartBtn>
            <Btn>Learn More</Btn>
          </CartBtn>
        </Cart>
      </CartContainer>
    </Container>
  );
}

export default SectionThree;
