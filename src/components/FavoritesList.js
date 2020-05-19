import React from 'react';
import FavoritePreview from './FavoritePreview';

function FavoritesList({ favorites }) {
  return (
    <div>
      {favorites.map((favorite) => (
        <FavoritePreview favorite={favorite} />
      ))}
    </div>
  );
}

export default FavoritesList;
