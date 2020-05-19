import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import CardCatalog from './components/CardCatalog';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FavoriteStar from './components/FavoriteStar';
import Sidebar from './components/Sidebar';
//import useNewsAPI from './hooks/useNewsAPI';
import axios from 'axios';
//import data from "./data.js";

const defaultTopic = 'recipes';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [reloaded, setReloaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topic, setTopic] = useState(defaultTopic);
  const [currentTopics, setCurrentTopics] = useState([topic]);
  //const [searchAPI, articles, errorMessage] = useNewsAPI();

  const url = `https://newsapi.org/v2/everything?q=${topic}&language=en&pageSize=100&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`;

  const compareFunction = (a, b) => {
    if (a.publishedAt > b.publishedAt) {
      return -1;
    } else if (b.publishedAt > a.publishedAt) {
      return 1;
    } else {
      return 0;
    }
  };

  function reload() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    setLoading(true);
    //searchAPI(currentTopics);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data.articles))
      .then(setReloaded(true))
      .then(setTimeout(() => setReloaded(false), 3000))
      .then(setLoading(false));
  }

  useEffect(() => {
    const searchAPI = () => {
      axios
        .all(
          currentTopics.map((topic) => {
            return axios.get(
              `https://newsapi.org/v2/everything?q=${topic}&language=en&pageSize=100&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`
            );
          })
        )
        .then(
          axios.spread((...responses) => {
            let library = [];
            responses.map(
              (topic) => (library = [...topic.data.articles, ...library])
            );
            let sortedLibrary = library.sort(compareFunction);
            setResults(sortedLibrary);
          })
        )
        .then(setLoading(false))
        .catch((err) => {
          console.log(err);
        });
    };
    searchAPI();

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => setResults(data.articles))
    //   .then(setLoading(false));
  }, [currentTopics]);

  function navHeight() {
    return window.pageYOffset > 100 ? setScrolled(true) : setScrolled(false);
  }
  window.addEventListener('scroll', navHeight);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isInFavorites = (addedFavorite) => {
    let inFavorites = false;
    if (favorites.every((favorite) => favorite.url !== addedFavorite.url)) {
      inFavorites = false;
    } else {
      inFavorites = true;
    }
    return inFavorites;
  };

  const changeFavorites = (newsItem) => {
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

  const checkForTopic = (topic, array) => {
    for (let el of array) {
      if (el === topic) {
        return true;
      } else {
        return false;
      }
    }
  };

  const searchHandler = (e) => {
    if (e === '') {
      setTopic(defaultTopic);
    } else {
      let cleanedString = e.replace(' ', '+');
      //setTopic(cleanedString);
      if (!checkForTopic(cleanedString, currentTopics)) {
        setCurrentTopics([...currentTopics, cleanedString]);
      }
    }

    reload();
  };

  const removeCurrentTopic = (topic) => {
    const cleanedTopics = currentTopics.filter((currentTopic) => {
      return currentTopic !== topic;
    });
    setCurrentTopics(cleanedTopics);
  };

  return (
    <div className='App' id='App'>
      <Navbar
        reload={reload}
        favorites={favorites}
        sidebarOpen={sidebarOpen}
        handleSidebarOpen={handleSidebarOpen}
        scrolled={scrolled}
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        topic={topic}
        searchHandler={searchHandler}
        scrolled={scrolled}
        currentTopics={currentTopics}
        favorites={favorites}
        changeFavorites={changeFavorites}
        removeCurrentTopic={removeCurrentTopic}
      />
      <CardCatalog
        loading={loading}
        results={results}
        reloaded={reloaded}
        addToFavorites={changeFavorites}
        isInFavorites={isInFavorites}
      />
      <Footer />
    </div>
  );
}

export default App;
