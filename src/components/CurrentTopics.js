import React from 'react';
import CurrentTopic from './CurrentTopic';

function CurrentTopics({ currentTopics, removeCurrentTopic }) {
  return (
    <div className='CurrentTopics'>
      {currentTopics &&
        currentTopics.map((topic) => (
          <CurrentTopic topic={topic} removeCurrentTopic={removeCurrentTopic} />
        ))}
    </div>
  );
}

export default CurrentTopics;
