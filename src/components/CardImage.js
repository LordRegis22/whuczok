import React from "react";
import defaultImage from "../img/Isabelle_noImage.png";

function CardImage(props) {
  return (
    <img
      style={{ width: "100%", height: "auto" }}
      src={props.urlToImage ? props.urlToImage : defaultImage}
      alt={props.description}
    />
  );
}

export default CardImage;
