import React, {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';
import NasaImage from './NasaImage'


const nasaApi = 'https://lambda-github-api-server.herokuapp.com/';

function App() {
const [image, setImage] = useState('');

  useEffect( () => {
    axios.get(nasaApi)
    .then((response => {
      debugger
      setImage(response.data.hdurl);
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
        <div className="image">
          <NasaImage image={image}
          />
        </div>
        <p className="description"></p>
      </div>
    </div>
  )
};

export default App;
