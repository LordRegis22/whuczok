import React from 'react';
import { MdClose } from 'react-icons/md';

function CurrentTopic({ topic, removeCurrentTopic }) {
  return (
    <div className='CurrentTopic'>
      {topic}{' '}
      <MdClose
        className='current-topic-close'
        onClick={() => removeCurrentTopic(topic)}
      />
    </div>
  );
}

export default CurrentTopic;
