import React from "react";
import styled from "styled-components";
import Date from "../../pics/date.png";
import Time from "../../pics/time.png";
import Duration from "../../pics/duration.png";
import Price from "../../pics/price.png";
import { Btn } from "../Header";

const Container = styled.div`
  height: 600px;
`;
const Wrap = styled.div`
  height: 400px;
  margin: 0px auto;
  justify-content: space-around;
  display: flex;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto 0px;
  height: 200px;
  text-align: center;
  align-items: center;
`;
const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
const ItemHeader = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  color: #000033;
`;
const Itemtext = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;

  color: #000033;
`;
const BTN = styled.div`
  text-align: center;
`;

function SectionThree() {
  return (
    <Container>
      <Wrap>
        <Item>
          <Icon src={Date} width="50" height="55" />
          <ItemHeader>Date</ItemHeader>
          <Itemtext>November 12th</Itemtext>
        </Item>
        <Item>
          <Icon src={Time} width="56.88" height="48.75" />
          <ItemHeader>Time</ItemHeader>
          <Itemtext>10 am GMT+1</Itemtext>
        </Item>
        <Item>
          <Icon src={Duration} width="37.92" height="51.46" />
          <ItemHeader>Duration</ItemHeader>
          <Itemtext>2 Hours</Itemtext>
        </Item>
        <Item>
          <Icon src={Price} width="52" height="52" />
          <ItemHeader>Price</ItemHeader>
          <Itemtext>Free</Itemtext>
        </Item>
      </Wrap>
      <BTN>
        <Btn style={{ width: "250px" }}>Reserve Your Spot</Btn>
      </BTN>
    </Container>
  );
}

export default SectionThree;
