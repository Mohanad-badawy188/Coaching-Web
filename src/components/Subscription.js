import React from "react";
import styled from "styled-components";
import { Btn } from "./homePageSections/SectionOneLeftSide";
import { Header, Heading } from "./homePageSections/SectionThree";
const Container = styled.div`
  height: 511px;

  @media (max-width: 800px) {
    height:900px;
  }
`;

const Text = styled.div`
  font-family: "Ubuntu";

  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  width: 45%;
  margin: auto;
  text-align: center;

  color: rgba(0, 0, 51, 0.95);
`;
const SubscribeContainer = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
display: inline-block;
text-align: center;
  }
`;
export const Input = styled.input`
  padding: 13.676px 30px;
  width: 400px;
  background: #f2f1f1;
  border-radius: 22.6667px;
  margin: 0px 30px;
  border: none;
  height: 27px;

  color: rgba(107, 114, 128, 0.4);
  @media (max-width: 600px) {
width: 50%;
  }
  ::placeholder {
    height: 27px;

    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 26px;

    color: rgba(107, 114, 128, 0.4);
  }
`;

function Subscription() {
  return (
    <Container>
      <Heading>
        <Header>Subscribe to our newsletter </Header>
        <Text>
          We recommend you to subscribe to our newsletter , drop your email
          below to get daliy update about us
        </Text>
      </Heading>
      <SubscribeContainer>
        <Input placeholder="Enter your email address" />
        <Btn>Subscribe</Btn>
      </SubscribeContainer>
    </Container>
  );
}

export default Subscription;
