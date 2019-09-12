import React from "react";
import styled from 'styled-components';

function Date(props) {
  return <DateHeading>{props.date}</DateHeading>;
}

const DateHeading = styled.div`
   font-size: 1.5rem;
   padding-bottom: 6%;
`;

export default Date;
