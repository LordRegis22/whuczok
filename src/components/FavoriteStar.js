import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function FavoriteStar(props) {
  const favorite = props.favorite;

  return (
    <>
      {favorite ? (
        <AiFillStar className="FavoriteStar" />
      ) : (
        <AiOutlineStar className="FavoriteStar" />
      )}
    </>
  );
}

export default FavoriteStar;
