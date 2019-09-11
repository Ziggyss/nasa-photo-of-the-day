import React, {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';
import NasaImage from './NasaImage';
import Description from './Description';
import Date from './Date';


const nasaApi = 'https://lambda-github-api-server.herokuapp.com/';

function App() {
const [image, setImage] = useState('');
const [description, setDescription] = useState('');
const [date, setDate] = useState('');

  useEffect( () => {
    axios.get(nasaApi)
    .then((response => {
      debugger
      setImage(response.data.hdurl);
      setDescription(response.data.explanation);
      setDate(response.data.date);
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
