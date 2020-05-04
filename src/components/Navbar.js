import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import isabelle from "../img/isabelle.png";

function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [viewFavorites, setViewFavorites] = useState(false);
  const navProps = useSpring({
    height: scrolled ? "2rem" : "4rem",
  });

  const logoProps = useSpring({
    height: scrolled ? "1.5rem" : "3rem",
    width: scrolled ? "1.5rem" : "3rem",
    config: { mass: 1, tension: 180, friction: 10 },
  });

  const titleProps = useSpring({
    opacity: scrolled ? 0 : 1,
    marginLeft: "1rem",
  });
  function navHeight() {
    return window.pageYOffset > 100 ? setScrolled(true) : setScrolled(false);
  }
  window.addEventListener("scroll", navHeight);

  function handleClick() {
    props.reload();
  }

  return (
    <animated.div className="navbar" style={navProps}>
      <animated.div style={logoProps} onClick={() => handleClick()}>
        <img
          src={isabelle}
          alt="the whuczok squirrel"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </animated.div>
      <animated.h1 style={titleProps}>WHÜCZØK</animated.h1>
      <animated.div style={logoProps} className="favorite-badge">
        <h2>{props.favorites.length}</h2>
      </animated.div>
    </animated.div>
  );
}

export default Navbar;
