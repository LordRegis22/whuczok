import React, { useState, useEffect } from "react";
import "./App.css";
import CardCatalog from "./components/CardCatalog";
import Footer from "./components/Footer";
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
  const defaultTopic = "recipes";
  const [topic, setTopic] = useState(defaultTopic);
  const url = `https://newsapi.org/v2/everything?q=${topic}&language=en&pageSize=100&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`;

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
  }, [topic]);

  const searchHandler = (e) => {
    if (e === "") {
      setTopic(defaultTopic);
    } else {
      let cleanedString = e.replace(" ", "+");
      setTopic(cleanedString);
    }

    reload();
  };

  return (
    <div className="App" id="App">
      <Navbar reload={reload} />
      <CardCatalog
        results={results}
        reloaded={reloaded}
        topic={topic}
        searchHandler={searchHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
