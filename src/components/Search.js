import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search(props) {
  // Create inputHook using topic as prop
  const [inputTopic, setInputTopic] = useState(props.topic);
  // Input handler
  const handleInput = (e) => {
    setInputTopic(e.target.value);
  };
  // Click handler
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
