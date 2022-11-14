import React from "react";
import styled from "styled-components";

export const LeftSide = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1200px) {
    margin-bottom: 120px;
  }
`;
export const Heading = styled.div`
  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
  }
  width: 630px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 65px;
  color: #000033;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
    width: 430px;
    margin-bottom: 60px;
    text-align: center;
  }
  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    margin-bottom: 0px;
    font-size: 30px;
    text-align: center;
    margin-top: 60px;
  }
`;

export const Text = styled.div`
  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    width: 650px;
    margin-bottom: 60px;
    text-align: center;
  }
  @media (max-width: 900px) {
    width: 430px;
    margin-bottom: 60px;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 200px;
    margin-bottom: 150px;
    text-align: center;
  }

  display: flex;
  flex-wrap: wrap;
  width: 625px;
  height: 52px;
  margin: 35px 0px;

  font-family: "Ubuntu";
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;

  color: #000033;
`;
export const Btn = styled.button`
  align-items: center;
  padding: 13.676px 20.514px;
  width: 157px;
  height: 53.35px;
  background: #029837;
  border-radius: 20px;

  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;
  border: none;
  cursor: pointer;
  order: 0;
  flex-grow: 0;

  &:hover {
    background-color: transparent;
    border-color: #029837;
    color: #029837;

    border: 2px solid #029837;
  }
  @media (max-width: 800px) {
    margin-top: 30px;

  }
  @media (max-width: 600px) {
    margin-top: 100px;
  }
`;
const BTN = styled.div`
  text-align: center;
  @media (max-width: 750px) {
    width: 430px;
  }
  @media (max-width: 600px) {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
function SectionOneLeftSide() {
  return (
    <LeftSide>
      <Heading> Marriage and Relationship Coaching </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et
        hendrerit in, accumsan tempus erat.
      </Text>
      <BTN>
        <Btn>Book Now</Btn>
      </BTN>
    </LeftSide>
  );
}

export default SectionOneLeftSide;
