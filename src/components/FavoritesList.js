import React from 'react';
import FavoritePreview from './FavoritePreview';

function FavoritesList({ favorites, changeFavorites }) {
  return (
    <div>
      {favorites.map((favorite) => (
        <FavoritePreview
          favorite={favorite}
          changeFavorites={changeFavorites}
          key={favorite.url}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
