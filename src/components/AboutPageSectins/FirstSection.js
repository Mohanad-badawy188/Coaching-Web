import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '../homePageSections/SectionOneLeftSide'
import  { CupPic, RightSide } from '../homePageSections/SectionOneRightSide'
import CupPhoto from "../../pics/cuppic.png";
import Dot from '../../pics/dots.png'


const  Container = styled.div`
height: 650px;
@media (max-width: 1200px) {
 
    height: 1400px;
  }
`
const Wrap = styled.div`
display: flex;
margin: 55px;
@media (max-width: 1200px) {
    text-align: center;

    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }


`
const LeftSide  = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 1200px) {
 margin-bottom: 100px;
 height: 700px;
 justify-content: space-between;
  }
`
const Dots = styled.img`
position: absolute;
top:10px;
left: 20px;
z-index: -1;
@media (max-width: 1200px) {
  top:20px;
  }

`
function FirstSection() {
  return (
<Container>
    <Wrap>
        <LeftSide>
    <Heading > Jean Joe - FOUNDER</Heading>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.</Text>
<Text>Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.</Text>
<Text>Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.</Text>


        </LeftSide>
  <RightSide >
    <CupPic src={CupPhoto} />
    <Dots src={Dot}/>
  </RightSide>
    </Wrap>
</Container>
  )
}

export default FirstSection
