import React, { useState } from "react";
import FavoriteStar from "./FavoriteStar";
import CardImage from "./CardImage";

const dateTime = (dateString) => {
  let cleanDate = dateString.slice(0, -1);
  let dateArr = cleanDate.split("T");
  let [date, time] = dateArr;
  return { date, time };
};

function Card(props) {
  const [favorite, setFavorite] = useState(false);

  let newsItem = props.newsItem;
  const { urlToImage, description, url, title, source, publishedAt } = newsItem;

  const handleClick = (newsItem) => {
    setFavorite((favorite) => !favorite);
    //props.addToFavorites(newsItem);
  };

  return (
    <div className="Card">
      <CardImage urlToImage={urlToImage} description={description} />
      <div onClick={() => handleClick(newsItem)}>
        <FavoriteStar favorite={favorite} />
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2 style={{ marginBottom: 0 }}>{title}</h2>
      </a>
      <p
        style={{ flexGrow: "2" }}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <small style={{ flexGrow: 2 }}>{source.name}</small>
        <small style={{ marginRight: ".3rem" }}>
          {dateTime(publishedAt).date}
        </small>
        <small>{dateTime(publishedAt).time}</small>
      </div>
    </div>
  );
}

export default Card;
