import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

import NasaImage from "./NasaImage";
import Description from "./Description";
import Date from "./Date";
import Title from "./Title";
import Copyright from "./Copyright";

const nasaApi =
  "https://api.nasa.gov/planetary/apod?api_key=EHqoYR5TGTCiVATwKekOt8jB6C5HT8SCJBTBctOm";

function App() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [copyright, setCopyright] = useState("");

  useEffect(() => {
    axios
      .get(nasaApi)
      .then(response => {
        setImage(response.data.hdurl);
        setDescription(response.data.explanation);
        setDate(response.data.date);
        setTitle(response.data.title);
        setCopyright(response.data.copyright);
        console.log(response.data);
      })
      .catch(response => {
        console.log(response.error);
      });
  }, []);

  return (
    <div className="App">
      <PODH2>NASA Photo of the Day</PODH2>
      <MainContainer>
        <ImageContainer>
          <NasaImage image={image} />
          <Copyright copyright={copyright} />
        </ImageContainer>
        <TextContainer>
          <Title title={title} />
          <Date date={date} />
          <Description description={description} />
        </TextContainer>
      </MainContainer>
    </div>
  );
}

const PODH2 = styled.h2`
  font-size: 4rem;
  color: dark-gray;
  text-align: center;
  @media(max-width: 500px){
    font-size: 3rem;
  }
`;

const MainContainer = styled.div`
  width: 85%;
  background-color: #282c34;
  border: solid 2px white;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  @media(max-width: 500px){
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 75%;
  padding-left: 3%;
  text-align: center;
  align-content: center;
  color: grey;
  padding-top: 5%;
  padding-bottom: 5%;
  @media(max-width: 500px){
    margin: 0 auto;
    padding-left: initial;
  }
`;

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   color: white;
   padding: 2%;
   align-items: center;
   @media(max-width: 500px){
     text-align: center;
   }
`;

export default App;
