import React from "react";
import logo from "../pics/main logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.nav`
  background-color: white;
  display: flex;
  height: 150px;
  padding: 0px 20px;

  justify-content: space-between;
`;
const LeftSide = styled.div``;
const RightSide = styled.div`
  display: flex;
`;
const Logo = styled.img``;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  width: 600px;
  justify-content: space-around;
`;
const NavItem = styled.li`
  list-style-type: none;

  padding: 2px 3px;
  color: #000033;
  font-family: "Ubuntu";
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: right;

  cursor: pointer;
  &:hover {
    border-bottom: black 3px solid;
    font-weight: 400;
  }
`;

export const Btn = styled.button`
  padding: 10px 35px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #029837;
  border-radius: 20px;
  background-color: transparent;
  border-color: #029837;
  flex-grow: 0;
  cursor: pointer;
  width: 160px;

  &:hover{
    background-color:rgba(2, 152, 55, 1);
    color:white;
    border: none;

  }
`;

function Header() {
  return (
    <Container>
      <LeftSide>
        <Logo src={logo} />
      </LeftSide>
      <RightSide>
        <NavUl>
          <Link to="/" style={{ textDecoration: "none" }}>
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <NavItem>About</NavItem>
          </Link>
          <Link to="/Services" style={{ textDecoration: "none" }}>
            <NavItem>Services</NavItem>
          </Link>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <NavItem>Pricing</NavItem>
          </Link>
          <Link to="/webinar" style={{ textDecoration: "none" }}>
            <NavItem>Webinar</NavItem>
          </Link>
          <Link to="/Contact" style={{ textDecoration: "none" }}>
            <Btn>Contact US</Btn>
          </Link>
        </NavUl>
      </RightSide>
    </Container>
  );
}

export default Header;
