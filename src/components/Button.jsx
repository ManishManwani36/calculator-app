import React from "react";
import "./Button.css";

function Button(props) {
  let buttonColor = "#E9E3DC";
  let buttonTextColor = "#474C60";
  let buttonBorderColor = "#B2A498";

  if (props.buttonLabel === "DEL" || props.buttonLabel === "RESET") {
    buttonColor = "#6C779E";
    buttonTextColor = "#FEFFFF";
    buttonBorderColor = "#4B5577";
  }
  if (props.buttonLabel === "=") {
    buttonColor = "#C63F35";
    buttonTextColor = "#FEFFFF";
    buttonBorderColor = "#8A261D";
  }

  if (!props.themeDark) {
    buttonColor = "#E6E5E1";
    buttonTextColor = "#3A3A31";
    buttonBorderColor = "#A89F95";

    if (props.buttonLabel === "DEL" || props.buttonLabel === "RESET") {
      buttonColor = "#4F868B";
      buttonTextColor = "#FEFFFF";
      buttonBorderColor = "#36676C";
    }
    if (props.buttonLabel === "=") {
      buttonColor = "#BF5500";
      buttonTextColor = "#FEFFFF";
      buttonBorderColor = "#843F00";
    }
  }

  return (
    <button
      onClick={() => props.handleClick(props.buttonLabel)}
      className="calc__button"
      style={{
        color: buttonTextColor,
        backgroundColor: buttonColor,
        borderBottomColor: buttonBorderColor,
      }}
    >
      {props.buttonLabel}
    </button>
  );
}

export default Button;
