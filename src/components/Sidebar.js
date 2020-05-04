import React from "react";
import { useSpring, animated } from "react-spring";
import Search from "./Search";

function Sidebar(props) {
  const sidebarSpring = useSpring({
    position: "fixed",
    right: "0px",
    top: props.scrolled ? "2rem" : "4rem",
    zIndex: 2,
    height: "100%",
    width: props.sidebarOpen ? "100vw" : "0vw",
  });

  return (
    <animated.div className="Sidebar" style={sidebarSpring}>
      <div className="sidebar-container">
        <Search topic={props.topic} searchHandler={props.searchHandler} />
        This is the sidebar
      </div>
    </animated.div>
  );
}

export default Sidebar;
