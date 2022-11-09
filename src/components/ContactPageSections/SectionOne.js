import React from "react";
import styled from "styled-components";
import { Btn } from "../homePageSections/SectionOneLeftSide";
import { Heading } from "../homePageSections/SectionThree";
import { Input } from "../Subscription";

const Container = styled.div`
  height: 1000px;
  @media (max-width: 550px) {
    height: 1200px;
  }
`;
const Header = styled.div`
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 50px;
  line-height: 75px;
  margin: 70px auto 30px;
  text-align: center;
  color: #000033;
`;
const Text = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  margin: auto;

  width: 50%;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 51, 0.95);
`;
const Form = styled.form`
  margin: 100px 0px;
  text-align: center;
`;
const FormItem = styled.div`
  margin-bottom: 50px;
`;
const Note = styled.textarea`
  background: #f2f1f1;
  box-sizing: border-box;
  border-radius: 17.3445px;
  padding: 30px 30px;
  border: none;
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

function SectionOne() {
  return (
    <Container>
      <Heading>
        <Header>Contact Us</Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consectetur justo quis
        </Text>
      </Heading>
      <Form>
        <FormItem>
          <Input placeholder="Your full name" />
        </FormItem>
        <FormItem>
          {" "}
          <Input placeholder="Your email address" />
        </FormItem>
        <FormItem>
          {" "}
          <Note
            placeholder="Write a note about your request"
            rows="15"
            cols="47"
          />
        </FormItem>
        <FormItem>
          <Btn style={{ width: "450px" }}>Send</Btn>{" "}
        </FormItem>
      </Form>
    </Container>
  );
}

export default SectionOne;
