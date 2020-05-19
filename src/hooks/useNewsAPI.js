import { useState, useEffect } from 'react';
import axios from 'axios';

export default (defaultTopic) => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAPI = (currentTopics) => {
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
          const results = responses.map((topic) => topic.data.articles);
          setArticles(results);
        })
      )
      .catch((err) => {
        console.log(err);
        setErrorMessage(err);
      });
  };
  //   const searchApi = async (searchTerm) => {
  //     try {
  //       const response = await yelp.get('/search', {
  //         params: { limit: 50, term: searchTerm, location: 'Long Beach' },
  //       });
  //       setResults(response.data.businesses);
  //     } catch (err) {
  //       setErrorMessage('Oops! Looks like something went wrong!');
  //     }
  //   };

  //   useEffect(() => {
  //     searchAPI(['nintendo', 'cooking']);
  //   }, []);

  return [searchAPI, articles, errorMessage];
};
