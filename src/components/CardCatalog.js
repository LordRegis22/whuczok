import React from "react";
import Card from "./Card";
import ReloadedMessage from "./ReloadedMessage";
import Search from "./Search";

function CardCatalog(props) {
  return (
    <>
      <div className="CardCatalog">
        <Search
          topic={props.topic}
          searchHandler={props.searchHandler}
        ></Search>
        <ReloadedMessage reloaded={props.reloaded} />
        {props.results.length == 0 ? (
          <p style={{ textAlign: "center" }}>
            Looks like there's no articles on this topic!
          </p>
        ) : (
          props.results.map((newsItem, index) => (
            <Card
              key={index}
              newsItem={newsItem}
              addToFavorites={props.addToFavorites}
            />
          ))
        )}
      </div>
    </>
  );
}

export default CardCatalog;
