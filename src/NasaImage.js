import React from "react";

function NasaImage(props) {
  return (
    <div className="nasaImage">
      <img src={props.image} alt="NASA POD"></img>
    </div>
  );
}

export default NasaImage;
