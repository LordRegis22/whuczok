import React from "react";
import Card from "./Card";
import ReloadedMessage from "./ReloadedMessage";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

function CardCatalog(props) {
  return (
    <>
      <div className="CardCatalog">
        {props.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ReloadedMessage reloaded={props.reloaded} />
            {props.results.length === 0 ? (
              <p style={{ textAlign: "center" }}>
                Looks like there's no articles on this topic!
              </p>
            ) : (
              props.results.map((newsItem, index) => (
                <Card
                  key={uuidv4()}
                  newsItem={newsItem}
                  addToFavorites={props.addToFavorites}
                  isInFavorites={props.isInFavorites}
                />
              ))
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CardCatalog;
