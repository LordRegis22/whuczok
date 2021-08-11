import React from 'react';
import Card from './Card';
import ReloadedMessage from './ReloadedMessage';
import { v4 as uuidv4 } from 'uuid';

function CardCatalog({
  loading,
  results,
  reloaded,
  addToFavorites,
  isInFavorites,
}) {
  return (
    <>
      {window.innerWidth >= 500 && (
        <ReloadedMessage
          reloaded={reloaded}
          style={{ position: 'relative', top: '4rem', marginTop: '.5rem' }}
        />
      )}
      <div className='CardCatalog' id='CardCatalog'>
        {/* if loading, render loading spinner */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* if no results, render error message */}
            {results.length === 0 ? (
              <p style={{ textAlign: 'center' }}>
                Looks like there's no articles on this topic. Try adjusting your
                search term.
              </p>
            ) : (
              <>
                {/* Render card for every data point */}
                {window.innerWidth < 500 && (
                  {/* only load reload message if width of window less than 500 */}
                  <ReloadedMessage
                    reloaded={reloaded}
                    style={{ marginTop: 0 }}
                  />
                )}
                {results.map((newsItem) => (
                  <Card
                    key={uuidv4()}
                    newsItem={newsItem}
                    addToFavorites={addToFavorites}
                    isInFavorites={isInFavorites}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CardCatalog;
