import React from 'react';
import { useSpring, animated } from 'react-spring';
import CurrentTopics from './CurrentTopics';
import FavoritesList from './FavoritesList';
import Search from './Search';

function Sidebar({
  scrolled,
  sidebarOpen,
  topic,
  searchHandler,
  currentTopics,
  favorites,
  changeFavorites,
  removeCurrentTopic,
}) {
  const sidebarSpring = useSpring({
    position: 'fixed',
    right: '0px',
    top: scrolled ? '2rem' : '4rem',
    zIndex: 1,
    height: '100%',
    width: sidebarOpen ? '100vw' : '0vw',
  });

  return (
    <animated.div className='Sidebar' style={sidebarSpring}>
      <div className='sidebar-container'>
        <div className='sidebar-scrollable'>
          <Search topic={topic} searchHandler={searchHandler} />
          <CurrentTopics
            currentTopics={currentTopics}
            removeCurrentTopic={removeCurrentTopic}
          />
          <FavoritesList
            favorites={favorites}
            changeFavorites={changeFavorites}
          />
        </div>
      </div>
    </animated.div>
  );
}

export default Sidebar;
