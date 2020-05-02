import React, { useState, useEffect } from "react";
import "./App.css";
import CardCatalog from "./components/CardCatalog";
import Navbar from "./components/Navbar";
//import data from "./data.js";

function App() {
  //const [favorites, setFavorites] = useState([]);

  // const inFavorites = identifier => {
  // let object;
  // let inArray = false;
  // for (object of favorites) {
  //   if (object.favoriteIdentifier === identifier) {
  //     inArray = true;
  //   } else {
  //     inArray = false;
  //   }
  // }
  // console.log(inArray);
  // return inArray;
  // };

  // const addToFavorites = newsItem => {
  //   console.log("added!");
  //   setFavorites([...favorites, newsItem]);
  // };

  const [results, setResults] = useState([]);
  const [reloaded, setReloaded] = useState(false);
  const url = `https://newsapi.org/v2/everything?q=food+news&language=en&pageSize=100&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`;

  function reload() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data.articles))
      .then(setReloaded(true))
      .then(setTimeout(() => setReloaded(false), 3000));
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data.articles));
  }, []);

  return (
    <div className="App" id="App">
      <Navbar reload={reload} />
      <CardCatalog results={results} reloaded={reloaded} />
      <div style={{ display: "flex", alignItems: "center", height: "3rem" }}>
        <p style={{ width: "100%", textAlign: "center" }}>
          Gratefully powered by <a href="https://newsapi.org">NewsAPI.org</a>
        </p>
      </div>
    </div>
  );
}

export default App;
