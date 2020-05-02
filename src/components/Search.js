import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search(props) {
  const [inputTopic, setInputTopic] = useState(props.topic);
  const handleInput = (e) => {
    setInputTopic(e.target.value);
  };
  return (
    <div className="Search">
      <input
        placeholder={props.topic}
        value={inputTopic}
        onChange={handleInput}
      ></input>
      <button onClick={() => props.searchHandler(inputTopic)}>
        <FaSearch style={{ fontSize: "2rem" }} />
      </button>
    </div>
  );
}

export default Search;
