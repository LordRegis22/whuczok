import React from 'react';
import defaultImage from '../img/Isabelle_noImage.png';
import { MdClose } from 'react-icons/md';

function FavoritePreview({ favorite, changeFavorites }) {
  return (
    <div className='FavoritePreview'>
      <div>
        <a href={favorite.url} target='_blank' rel='noopener noreferrer'>
          <img
            className='favorite-preview-image'
            src={favorite.urlToImage ? favorite.urlToImage : defaultImage}
            alt={favorite.description}
          ></img>
        </a>
        <a href={favorite.url} target='_blank' rel='noopener noreferrer'>
          {favorite.title}
        </a>
      </div>
      <div>
        <MdClose
          className='favorite-close'
          onClick={() => changeFavorites(favorite)}
        />
      </div>
    </div>
  );
}

export default FavoritePreview;
