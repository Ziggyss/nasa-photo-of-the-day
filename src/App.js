import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components';

import NasaImage from "./NasaImage";
import Description from "./Description";
import Date from "./Date";
import Title from "./Title";
import Copyright from "./Copyright";

const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=EHqoYR5TGTCiVATwKekOt8jB6C5HT8SCJBTBctOm";

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
      <MainContainer >
        <div className="photoContainer">
        <Title title={title} />
        <Date date={date} />
          <div className="image">
            <NasaImage image={image} />
            <Copyright copyright={copyright} />
          </div>
        </div>
        <div className="infoBox">
          <div className="description">
            <Description description={description} />
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

const PODH2 = styled.h2`
   font-size: 4rem;
   color: dark-gray;
   text-align: center;
`; 

const MainContainer = styled.div`
  width: 80%;
  background-color: #282c34;
  border: solid 2px white;
  border-radius: 2px;
  margin: 0 auto;
`;




export default App;
