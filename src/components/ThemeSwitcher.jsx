import React from "react";
import "./ThemeSwitcher.css";

function ThemeSwitcher(props) {
  let bgColor = "#30354A";
  let toggleIcon = "#BF4437";

  function handleClick() {
    props.handleTheme();
  }

  if (!props.themeDark) {
    bgColor = "#D4CECF";
    toggleIcon = "#BA5600";
  }

  return (
    <div className="theme-switcher__container">
      <div className="theme-switcher__title">THEME</div>
      <button onClick={handleClick} className="theme-switcher__button" style={{backgroundColor: bgColor}}>
        <div
          className={`toggle__icon ${
            !props.themeDark ? "toggle__icon--active" : ""
          }`}
          style={{backgroundColor: toggleIcon}}
        ></div>
      </button>
    </div>
  );
}

export default ThemeSwitcher;
