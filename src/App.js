import React, { useState, useEffect } from "react";
import "./App.css";
import CardCatalog from "./components/CardCatalog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FavoriteStar from "./components/FavoriteStar";
//import data from "./data.js";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [results, setResults] = useState([]);
  const [reloaded, setReloaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const defaultTopic = "recipes";
  const [topic, setTopic] = useState(defaultTopic);
  const url = `https://newsapi.org/v2/everything?q=${topic}&language=en&pageSize=100&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`;

  function reload() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data.articles))
      .then(setReloaded(true))
      .then(setTimeout(() => setReloaded(false), 3000))
      .then(setLoading(false));
  }

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data.articles))
      .then(setLoading(false));
  }, [topic]);

  const isInFavorites = (addedFavorite) => {
    let inFavorites = false;
    if (favorites.every((favorite) => favorite.url !== addedFavorite.url)) {
      inFavorites = false;
    } else {
      inFavorites = true;
    }
    return inFavorites;
  };

  const addToFavorites = (newsItem) => {
    console.log(isInFavorites(newsItem));
    if (isInFavorites(newsItem)) {
      setFavorites(
        favorites.filter((favorite) => {
          return favorite.url !== newsItem.url;
        })
      );
    } else {
      setFavorites([newsItem, ...favorites]);
    }
  };

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
      <Navbar reload={reload} favorites={favorites} />
      <CardCatalog
        loading={loading}
        results={results}
        reloaded={reloaded}
        topic={topic}
        searchHandler={searchHandler}
        addToFavorites={addToFavorites}
        isInFavorites={isInFavorites}
      />
      <Footer />
    </div>
  );
}

export default App;
