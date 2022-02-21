import React from 'react'
import "./CalcScreen.css"

function CalcScreen(props) {

  let bgColor = "#23293B";

  if (!props.themeDark) {
    bgColor = "#EEEEEE"
  }

  return (
    <div className="calc-screen__container" style={{backgroundColor: bgColor}}>
        <p className="calc__output">{props.result}</p>
    </div>
  )
}

export default CalcScreen