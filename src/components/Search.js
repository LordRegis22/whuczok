import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search(props) {
  const [inputTopic, setInputTopic] = useState(props.topic);
  const handleInput = (e) => {
    setInputTopic(e.target.value);
  };

  const handleClick = () => {
    props.searchHandler(inputTopic);
    setInputTopic('');
  };
  return (
    <div className='Search'>
      <input
        placeholder={'Choose a topic'}
        value={inputTopic}
        onChange={handleInput}
      ></input>
      <button type='submit' onClick={handleClick}>
        <FaSearch style={{ fontSize: '2rem' }} />
      </button>
    </div>
  );
}

export default Search;
