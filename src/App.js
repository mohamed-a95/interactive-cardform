import React from "react";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    number: "",
    expiry: {
      month: "",
      year: "",
    },
    cvc: "",
    name: "",
  });

  const handleChangeName = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const handleChangeNumber = (e) => {
    setState({ ...state, number: e.target.value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      expiry: {
        ...prev.expiry,
        [name]: value,
      },
    }));
  };

  return (
    <div className="App">
      <div className="purpleCard">
        <div className="cardTop">
          <div className="redCircle"></div>
          <div className="cardNumber">
            {state.number.replace(/(.{4})/g, "$1 ").trim()}
          </div>
          <div className="cardName">{state.name}</div>{" "}
          <div className="cardExpiry">
            {state.expiry.month}/{state.expiry.year}
          </div>
        </div>
        <div className="cardBack">
          <div className="blackLine"></div>
          <div className="grayLine"></div>
          <div className="cardCVC">CVC</div>
        </div>
      </div>

      <div className="form">
        <form>
          <label>
            CARDHOLDER NAME
            <br />
            <input
              type="text"
              value={state.name}
              placeholder="Name"
              onChange={handleChangeName}
            />
          </label>
          <br />
          <label>
            <span className="lbl">CARDNUMBER</span>
            <br />
            <input
              type="text"
              maxLength="16"
              value={state.number}
              placeholder="0000 0000 0000 0000"
              onChange={handleChangeNumber}
            />
          </label>
          <br />
          <label>
            EXP.DATE MONTH
            <br />
            <input
              type="text"
              maxLength="2"
              name="month"
              value={state.expiry.month}
              placeholder="MM"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            EXP.DATE YEAR
            <br />
            <input
              type="text"
              name="year"
              maxLength="2"
              value={state.expiry.year}
              placeholder="YY"
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default App;
