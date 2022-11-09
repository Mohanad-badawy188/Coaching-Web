import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height: 500px;
background:  ${props => props.backGroundColor };
@media (max-width: 800px) {
    height: 700px;

  }
@media (max-width: 430px) {
    height: 900px;

  }
`
const Header = styled.div`
width: 50%;
margin: auto;
padding-top: 130px;
text-align: center;
font-family: 'Ubuntu';

font-weight: 700;
font-size: 35px;
line-height: 52px;


color: #000033;

`
const BtnContainer = styled.div`
text-align:center;
margin-top: 60px;
`
const Btn = styled.button`

  align-items: center;
  padding: 13.676px 30.514px;

  background: #029837;
  border-radius: 20px;

  font-family: "Ubuntu";

  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: #F9FFF8;
  border: none;
  cursor: pointer;

`;

function SecondSection(props) {
  return (
   <Container backGroundColor={props.backGroundColor} >
<Header> Are you ready to transfrom your Marriage and 
Relationship Book a  session with us</Header>
<BtnContainer>
    <Btn> Make an Appointment</Btn>
</BtnContainer>
   </Container>
  )
}
export default SecondSection
