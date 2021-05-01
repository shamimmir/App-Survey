import React from "react";
import styled from "styled-components";
import ImgAnimation from "./ImgAnimation";

const Journey = () => {
  return (
    <>
      <JourneyStyle>
        <ImgAnimation />
      </JourneyStyle>
    </>
  );
};

const JourneyStyle = styled.div`
  position: absolute;
  left: -40px;
  top: 40px;
  z-index: -1;
  width: 100%;
  height: 100px;

  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export default Journey;
