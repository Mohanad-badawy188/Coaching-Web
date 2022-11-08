import React from "react";
import styled from "styled-components";
import Quotation from "../pics/Quotation.png";

const Cart = styled.div`
  @media (max-width: 850px) {
margin: 20px auto;
  }
  width: 380px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 20px;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  z-index: 1;
`;
const CartTopSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartTopLeft = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
  margin-right: 10px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.div`
  font-family: "Mulish";

  font-weight: 700;
  font-size: 13px;
  line-height: 20px;

  color: #000033;
`;
const UserCountry = styled.div`
  font-family: "Mulish";
  font-weight: 200;
  font-size: 13px;
  line-height: 20px;

  color: rgba(0, 0, 51, 0.95);
`;

const CartTopRight = styled.img`
  width: 15px;
  height: 15px;
`;

const CartBotSide = styled.div`
font-family: 'Ubuntu';
font-weight: 300;
font-size: 13px;
line-height: 26px;
color: rgba(0, 0, 51, 0.95);
`;
function CustomerReviewsProps(props) {
  return (
    <Cart>
      <CartTopSide>
        <CartTopLeft>
          <UserImg src={props.img} />
          <UserInfo>
            <UserName>{props.name}</UserName>
            <UserCountry>{props.country}</UserCountry>
          </UserInfo>
        </CartTopLeft>
        <CartTopRight src={Quotation} />
      </CartTopSide>
      <CartBotSide>{props.review}</CartBotSide>
    </Cart>
  );
}

export default CustomerReviewsProps;
