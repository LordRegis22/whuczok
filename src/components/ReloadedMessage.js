import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';

function ReloadedMessage({ reloaded, style }) {
  const spring = useSpring({
    height: reloaded ? '7vh' : '0vh',
    opacity: reloaded ? 1 : 0,
    backgroundColor: 'rgba(145,24,216,.2)',
  });
  return (
    <animated.div className='ReloadedMessage' style={{ ...spring, ...style }}>
      <p>
        <span style={{ marginRight: '.5rem' }}>
          <FaThumbsUp />
        </span>
        Reloaded
      </p>
    </animated.div>
  );
}

export default ReloadedMessage;
