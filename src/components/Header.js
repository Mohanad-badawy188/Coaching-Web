import React from "react";
import logo from "../pics/main logo.png";
import styled from "styled-components";
const Container = styled.nav`
  background-color: white;
  display: flex;
  height: 150px;
  padding: 0px 20px;
  justify-content: space-between;
`;
const LeftSide = styled.div`
`;
const RightSide = styled.div`
  display: flex;
`;
const Logo = styled.img``;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  
`;
const NavItem = styled.li`
  list-style-type: none;
  margin: 0px 40px;
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
  width:160px;
`;

function Header() {
  return (
    <Container>
      <LeftSide>
        <Logo src={logo} />
      </LeftSide>
      <RightSide>
        <NavUl>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Services</NavItem>
          <Btn>Contact US</Btn>
        </NavUl>
      </RightSide>
    </Container>
  );
}

export default Header;
