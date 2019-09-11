import React from 'react';

funtion NasaImage(props) {

    return(   
      <div className="nasaImage">
      <img src={props.hdurl}></img>
      </div>    
    )
}

  

export default NasaImage;