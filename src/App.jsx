import { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import Button from "./components/Button";
import CalcScreen from "./components/CalcScreen";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [themeDark, setThemeDark] = useState(true);
  const [result, setResult] = useState("");

  let bgColor = "#444D6A";
  let textColor = "#FEFFFF";
  let calcBg = "#2F364C";

  function handleTheme() {
    setThemeDark((prevTheme) => !prevTheme);
  }

  if (!themeDark) {
    bgColor = "#E7E7E7";
    textColor = "#404037";
    calcBg = "#D4CECF";
  }

  function handleClick(name) {
    let nums = name;
    if (nums !== "DEL" && nums !== "RESET") {
      setResult((prevResult) => prevResult.concat(nums));
    }
  }

  function handleClear() {
    setResult("");
  }

  function handleDel() {
    setResult((prevResult) => prevResult.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Syntax Error");
      setTimeout(() => {
        setResult("");
      }, 1000);
    }
  }

  return (
    <>
      <main style={{ color: textColor, backgroundColor: bgColor }}>
        <div className="calc-app__container">
          <div className="calc-app__header">
            <AppName />
            <ThemeSwitcher handleTheme={handleTheme} themeDark={themeDark} />
          </div>
          <div className="calc-screen__box">
            <CalcScreen result={result} themeDark={themeDark} />
          </div>
          <div className="calc-app__buttons__box">
            <div
              className="calc-app__buttons__container"
              style={{ backgroundColor: calcBg }}
            >
              <Button
                handleClick={handleClick}
                buttonLabel="7"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="8"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="9"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleDel}
                buttonLabel="DEL"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="4"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="5"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="6"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="+"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="1"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="2"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="3"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="-"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="."
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="0"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="/"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClick}
                buttonLabel="x"
                themeDark={themeDark}
              />
              <Button
                handleClick={handleClear}
                buttonLabel="RESET"
                themeDark={themeDark}
              />
              <Button
                handleClick={calculate}
                buttonLabel="="
                themeDark={themeDark}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


export default App;
