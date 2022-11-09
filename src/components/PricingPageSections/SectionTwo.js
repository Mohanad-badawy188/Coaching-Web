import React from "react";
import styled from "styled-components";
import Rectangle from "../../pics/Rectangle.png";
import ring from "../../pics/ring.png";
import PropTypes from "prop-types";

import {
  Heading,
  Header,
  Text,
  CartContainer,
} from "../homePageSections/SectionThree";
import SectionThreeProps, {
  Cart,
  CartHeading,
  CartText,
  Icon,
  Ringpic,
} from "../homePageSections/SectionThreeProps";

const Container = styled.div`
  height: 900px;
  background: #f7fff6;
  padding-top: 10px;
  padding-bottom: 40px;
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

function SectionTwo() {
  function Carts(props) {
    return (
      <Cart>
        <Icon src={Rectangle} />
        <Ringpic src={ring} />
        <CartHeading>{props.heading}</CartHeading>
        <CartText>{props.desc}</CartText>
      </Cart>
    );
  }
  Carts.propTypes = {
    heading: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };

  return (
    <Container>
      <Heading>
        <Header>
          Core Services you will get <br />
          from us
        </Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
          et hendrerit in, accumsan tempus{" "}
        </Text>
      </Heading>
      <CartContainer>
        <Carts
          heading={" Pre Marital Coaching"}
          desc={
            "dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. "
          }
        />
        <Carts
          heading={"  Post Marital Coaching"}
          desc={
            "dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. "
          }
        />
        <Carts
          heading={"Virtual Coaching"}
          desc={
            "dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. "
          }
        />
      </CartContainer>
    </Container>
  );
}

export default SectionTwo;
