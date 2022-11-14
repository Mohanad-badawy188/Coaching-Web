import React from "react";
import styled from "styled-components";
import { Btn } from "../Header";
import { Header } from "./SectionThree";
import N from "../../pics/N.png";
import dot from "../../pics/dot.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 1400px;

  @media (max-width: 1150px) {
    height: 2300px;
  }
  @media (max-width: 750px) {
    height: 3200px;
  }

`;
const CartContainer = styled.div`
  flex-wrap: wrap;

  display: flex;
  justify-content: space-around;
  padding-top: 100px;
`;
const Cart = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 14.9885px;
  text-align: center;
  height: 650px;
  width: 250px;
  padding: 50px 30px;
`;
const CartHeader = styled.div`
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 29.9769px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.999231px;
  color: #000033;
`;
const Price = styled.div`
  display: flex;
  align-items: center;

  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 64.95px;
  line-height: 122px;
  letter-spacing: 0.999231px;
  color: #000033;
`;
const Icon = styled.img`
  margin-right: 15px;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Item = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;

  color: #000033;
`;
const Dot = styled.img`
  margin-right: 10px;
`;
const BTN = styled.div``;
function SectionSeven() {
  const Carts = (props) => {
    return (
      <Cart>
        <CartHeader>{props.header}</CartHeader>
        <Price>
          {" "}
          <Icon src={N} />
          {props.price}
        </Price>
        Lite
        <Items>
          <Item>
            <Dot src={dot} />
            {props.featureOne}
          </Item>
          <Item>
            <Dot src={dot} />
            {props.featureTwo}
          </Item>
          <Item>
            <Dot src={dot} />
            {props.featureThree}
          </Item>
          <Item>
            <Dot src={dot} />
            {props.featureFour}
          </Item>
        </Items>
        <BTN>
            <Link to ={"/ThankYou"}>
          <Btn style={{ width: "230px" }}>Choose Plan</Btn>
          </Link>
        </BTN>
      </Cart>
    );
  };
  Carts.propTypes = {
    header: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    featureOne: PropTypes.string,
    featureTwo: PropTypes.string,
    featureThree: PropTypes.string,
    featureFour: PropTypes.string,
  };
  return (
    <Container>
      <Header>
        So how much does our <br />
        services cost ?
      </Header>
      <CartContainer>
        <Carts
          header={"Lite"}
          price={"5,000"}
          featureOne={"Lorem ipsum dolor sit amet"}
          featureTwo={"Lorem ipsum dolor sit amet"}
          featureThree={"Lorem ipsum dolor sit amet"}
          featureFour={"Lorem ipsum dolor sit amet"}
        />
        <Carts
          header={"Basic"}
          price={"2,000"}
          featureOne={"Lorem ipsum dolor sit amet"}
          featureTwo={"Lorem ipsum dolor sit amet"}
          featureThree={"Lorem ipsum dolor sit amet"}
          featureFour={"Lorem ipsum dolor sit amet"}
        />
        <Carts
          header={"Plus"}
          price={"9,000"}
          featureOne={"Lorem ipsum dolor sit amet"}
          featureTwo={"Lorem ipsum dolor sit amet"}
          featureThree={"Lorem ipsum dolor sit amet"}
          featureFour={"Lorem ipsum dolor sit amet"}
        />
      </CartContainer>
    </Container>
  );
}

export default SectionSeven;
