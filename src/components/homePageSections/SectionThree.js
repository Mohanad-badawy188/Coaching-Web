import React from "react";
import styled from "styled-components";
import SectionThreeProps from "./SectionThreeProps";
const Container = styled.div`
  height: 880px;
  @media (max-width: 1300px) {
    height: 1850px;
  }
  @media (max-width: 800px) {
    height: 2000px;
  }
  @media (max-width: 600px) {
    height: 2250px;
  }
  @media (max-width: 400px) {
    height: 2800px;
  }
`;
export const Heading = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`;
 export const Header = styled.div`
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
export const Text = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  width: 80%;
  @media (max-width: 800px) {
 width: 100%;
  }
  justify-content: center;
  margin: 0 auto;

  text-align: center;

  color: rgba(0, 0, 51, 0.95);
`;
const CartContainer = styled.div`
  display: flex;

  margin: 100px;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
  }
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
        <SectionThreeProps
          heading="Pre Marital Coaching"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. "
          btn="Learn More"
        />
        <SectionThreeProps
          heading="Post Marital Coaching"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. "
          btn="Learn More"
        />
        <SectionThreeProps
          heading="Virtual Coaching"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. "
          btn="Learn More"
        />
      </CartContainer>
    </Container>
  );
}

export default SectionThree;
