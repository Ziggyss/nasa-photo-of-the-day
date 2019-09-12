import React from "react";
import styled from 'styled-components';

function NasaImage(props) {
  return (
    <ImageDiv>
      <img src={props.image} alt="NASA POD"></img>
    </ImageDiv>
  );
}

export default NasaImage;

const ImageDiv = styled.div`
  img {
    max-width: 700px;
    border: solid 2px white;
  }
`;
