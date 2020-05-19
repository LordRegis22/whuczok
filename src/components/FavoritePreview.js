import React from 'react';
import defaultImage from '../img/Isabelle_noImage.png';

function FavoritePreview({ favorite }) {
  return (
    <div className='FavoritePreview'>
      <img
        className='favorite-preview-image'
        src={favorite.urlToImage ? favorite.urlToImage : defaultImage}
        alt={favorite.description}
      ></img>
      {favorite.title}
    </div>
  );
}

export default FavoritePreview;
