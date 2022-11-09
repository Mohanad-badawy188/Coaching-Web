import React from "react";
import styled from "styled-components";
import Rectangle from "../../pics/Rectangle.png";
import ring from "../../pics/ring.png";
import { Btn } from "../Header";
import PropTypes from "prop-types";

export const Cart = styled.div`
  margin: 30px 10px;
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 20px;
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 50px 40px;
`;
export const Icon = styled.img`
  width: 65.1px;
  height: 53px;
  position: relative;

  background: rgba(2, 152, 55, 0.1);
  border-radius: 6.54321px;
  margin-bottom: 30px;
`;
export const Ringpic = styled.img`
  width: 31.54px;
  height: 31.54px;
  position: absolute;
  top: 60px;
  left: 55px;
`;
export const CartHeading = styled.div`
  width: 220px;
  height: 30px;
  @media (max-width: 480px) {
    width: 100px;
    margin-bottom: 20px;
  }
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;

  color: #000033;
  margin-bottom: 20px;
`;
export const CartText = styled.div`
  width: 315px;
  height: 104px;
  @media (max-width: 600px) {
    width: 200px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media (max-width: 400px) {
    width: 120px;
    margin-top: 60px;
    margin-bottom: 150px;
  }

  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 26px;
  display: flex;
  flex-wrap: wrap;
  color: rgba(0, 0, 51, 0.95);
`;
const CartBtn = styled.div`
  margin-top: 50px;
`;

function SectionThreeProps(props) {
  return (
    <Cart>
      <Icon src={Rectangle} />
      <Ringpic src={ring} />
      <CartHeading>{props.heading}</CartHeading>
      <CartText>{props.desc}</CartText>
      <CartBtn>
        <Btn>{props.btn}</Btn>
      </CartBtn>
    </Cart>
  );
}
SectionThreeProps.propTypes = {
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  btn: PropTypes.string,
};

export default SectionThreeProps;
