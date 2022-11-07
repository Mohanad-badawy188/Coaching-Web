import React from "react";
import styled from "styled-components";

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;
const Heading = styled.div`
  width: 630px;
  height: 130px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 65px;
  color: #000033;
`;

const Text = styled.div`
  width: 625px;
  height: 52px;
  margin: 10px 0px;

  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;

  color: #000033;
`;
export const Btn = styled.button`
  margin-top: 30px;
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
      <Btn>Book Now</Btn>
    </LeftSide>
  );
}

export default SectionOneLeftSide;
