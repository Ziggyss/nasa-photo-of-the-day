import React, {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';

import NasaImage from './NasaImage';
import Description from './Description';
import Date from './Date';
import Title from './Title'


const nasaApi = 'https://lambda-github-api-server.herokuapp.com/';

function App() {
const [image, setImage] = useState('');
const [description, setDescription] = useState('');
const [date, setDate] = useState('');
const [title, setTitle] = useState('');

  useEffect( () => {
    axios.get(nasaApi)
    .then((response => {
      debugger
      setImage(response.data.hdurl);
      setDescription(response.data.explanation);
      setDate(response.data.date);
      setTitle(response.data.title);
      console.log(response.data);
    }))
    .catch((response => {
      console.log(response.error);
    }));
   }, []);
  

  return (
    <div className="App">
      <div className="photoContainer">
        <h2>NASA Photo of the Day</h2>
        <Title title={title} />
        <Date date={date}/>
        <div className="image">
          <NasaImage image={image}
          />
        </div>
        <p className="description">
          <Description description={description}/>
        </p>
      </div>
    </div>
  )
};

export default App;
