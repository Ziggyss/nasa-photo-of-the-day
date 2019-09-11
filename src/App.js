import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import NasaImage from "./NasaImage";
import Description from "./Description";
import Date from "./Date";
import Title from "./Title";
import Copyright from "./Copyright";

const nasaApi = "https://lambda-github-api-server.herokuapp.com/";

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
      <h2>NASA Photo of the Day</h2>
      <Date date={date} />
      <div className="mainContainer">
        <div className="photoContainer">
        <Title title={title} />
          <div className="image">
            <NasaImage image={image} />
            <Copyright copyright={copyright} />
          </div>
        </div>
        <div className="infoBox">
         
          <p className="description">
            <Description description={description} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
