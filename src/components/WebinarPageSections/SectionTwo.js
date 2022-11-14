import React from "react";
import styled from "styled-components";
import Vector from "../../pics/Vector.png";
import { Btn } from "../Header";

const Container = styled.div`
  height: 1000px;
  background: #f7fff6;
  @media (max-width: 1200px) {
    height: 1200px;
  }
  @media (max-width: 900px) {
    height: 1500px;
  }
`;
const Header = styled.div`
  margin: 0px auto;
  padding-top: 125px;
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 50px;
  line-height: 65px;

  width: 30%;
  color: #000033;
  text-align: center;
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: auto;
  align-items: center;
  text-align: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const Item = styled.div`
  width: 50%;
  margin-top: 100px;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
const ItemHeader = styled.div`
  text-align: start;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-left: 150px;
  align-items: center;

  color: #000033;
  position: relative;
`;
const ItemText = styled.div`
  margin-left: 150px;

  margin-top: 15px;
  font-family: "Ubuntu";
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;

  display: flex;
  text-align: start;
  color: #000033;
  width: 70%;
  @media (max-width: 415px) {
  margin-left: 50px;
 }
  
`;
const Icon = styled.img`
  position: absolute;
  left: -45px;
  top: 3px;
`;
const BTN = styled.div`
  margin-top: 100px;
  text-align: center;
`;
function SectionTwo() {
  return (
    <Container>
      <Header>
        More Reasons <br />
        To Join My Webinar
      </Header>
      <Body>
        <Item>
          <ItemHeader>
            {" "}
            <Icon src={Vector} /> Pre Marital Talk{" "}
          </ItemHeader>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ItemText>
        </Item>
        <Item>
          <ItemHeader>
            {" "}
            <Icon src={Vector} /> Pre Marital Talk{" "}
          </ItemHeader>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ItemText>
        </Item>
        <Item>
          <ItemHeader>
            {" "}
            <Icon src={Vector} /> Pre Marital Talk{" "}
          </ItemHeader>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ItemText>
        </Item>
        <Item>
          <ItemHeader>
            {" "}
            <Icon src={Vector} /> Pre Marital Talk{" "}
          </ItemHeader>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ItemText>
        </Item>
      </Body>
      <BTN>
        <Btn style={{ width: "250px" }}>Reserve Your Spot</Btn>
      </BTN>
    </Container>
  );
}

export default SectionTwo;
