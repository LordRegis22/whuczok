import React from "react";
import Card from "./Card";
import ReloadedMessage from "./ReloadedMessage";

function CardCatalog(props) {
  return (
    <div className="CardCatalog">
      <ReloadedMessage reloaded={props.reloaded} />
      {props.results.map((newsItem, index) => (
        <Card
          key={index}
          newsItem={newsItem}
          addToFavorites={props.addToFavorites}
        />
      ))}
    </div>
  );
}

export default CardCatalog;
