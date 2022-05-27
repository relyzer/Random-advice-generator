import React, { useState } from "react";
import { AdviceSlip } from "./definitions";
import Button from "./component/button/Button";
import "./App.css";

const App = (): React.ReactElement => {
  const [quote, setQuote] = useState("");
  const [adviceId, setAdviceId] = useState(0);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (response.ok) {
          // console.log(response.json());
          return response.json();
        }
        throw response;
      })
      .then((data: AdviceSlip) => {
        const { id, advice } = data.slip;
        setAdviceId(id);
        setQuote(advice);
      })
      .catch((error) => {
        // Handle error here through a UI feedback or something
        return error;
      });
  };

  // const quotes =
  //   "It is easy to sit up and take notice, what's difficult is getting up and taking action.";

  return (
    <div className="App">
      <section className="advice-section">
        <div className="card">
          <h4>Advice #{adviceId}</h4>
          <p className="quote">
            {quote ? <q>{quote}</q> : "Click on the dice to receive an advice!"}
          </p>
          <img
            src="/images/pattern-divider-desktop.svg"
            alt="divider"
            className="divider"
          />
          <div className="advice-button-container">
            <Button
              imagePath="/images/icon-dice.svg"
              imageAlt="Dice"
              onClickHandler={handleClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
