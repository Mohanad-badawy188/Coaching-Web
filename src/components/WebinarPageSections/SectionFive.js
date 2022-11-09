import React from "react";
import styled from "styled-components";
import { Container, Header } from "../AboutPageSectins/SecondSection";
import { Btn } from "../Header";
const BTN = styled.div`
  text-align: center;
  margin-top: 60px;
`;
function SectionFive() {
  return (
    <Container>
      <Header>Are you ready to transfrom your Marriage and Relationship</Header>
      <BTN>
        <Btn style={{ width: "250px" }}> Reserve Your Spot</Btn>
      </BTN>
    </Container>
  );
}

export default SectionFive;
