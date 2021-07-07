import React from "react";
import styled from 'styled-components';

function Title(props) {
  return <TitleHeading>{props.title}</TitleHeading>;
}

const TitleHeading = styled.div`
    font-size: 2rem;
    padding: 5.5%;
    text-align: center;
`;

export default Title;
