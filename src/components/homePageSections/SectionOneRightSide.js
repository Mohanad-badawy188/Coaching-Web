import React from "react";
import styled from "styled-components";
import CupPhoto from "../../pics/cuppic.png";
import Ellipse from "../../pics/Ellipse.png";

const RightSide = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  position: relative;
  margin-bottom: 25px;
`;
const CupPic = styled.img`
  position: relative;

  filter: drop-shadow(0px 11.1346px 18.5576px rgba(2, 147, 52, 0.05));
  border-radius: 213.531px 0px 218.785px 216px;
`;
const SucResult = styled.div`
  position: absolute;
  box-shadow: 0px 10px 25px rgba(2, 147, 52, 0.1);
  display: flex;

  background-color: white;
  border-radius: 25px;
  width: 245px;
  height: 116px;
  top: 535px;
  left: -20px;
  align-items: center;
  justify-content: space-around;
`;
const LeftSideNote = styled.div`
  background-color: white;
`;
const CircleImg = styled.img`
  position: relative;
`;
const TextInCircle = styled.div`
  position: absolute;
  top: 43px;
  left: 45px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  background-color: white;
  font-size: 17px;
  line-height: 24px;
`;
const TextBeside = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;

  width: 77px;
  height: 66px;
`;
function SectionOneRightSide() {
  return (
    <RightSide>
      <CupPic src={CupPhoto} />

      <SucResult>
        <LeftSideNote>
          <CircleImg src={Ellipse} />
          <TextInCircle>90%</TextInCircle>
        </LeftSideNote>
        <TextBeside>Success Result</TextBeside>
      </SucResult>
    </RightSide>
  );
}

export default SectionOneRightSide;
