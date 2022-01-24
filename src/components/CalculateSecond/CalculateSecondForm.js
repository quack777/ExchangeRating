import React, { useState } from "react";
import CalculateRateBox from "./CalculateRateBox.js";
import "./CalculateSecondForm.css";
import client from "../../pages/Main/lib/api/client";

const CalculateSecondForm = () => {
  const [countryRates, setCountryRates] = useState(["USD", "CAD", "KRW", "HKD", "JPY", "CNY"]);
  const [currentExchangedMoney, setCurrentExchangedMoney] = useState(0);
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState("USD");

  const getExchangedMoney = (currentInputedMoney) => {
    return client.get("http://api.currencylayer.com/live", {
      params: {
        access_key: process.env.REACT_APP_API_KEY,
        source: currentSelectedCountry,
        amount: currentInputedMoney,
      },
    });
  };

  const checkInputedController = async (event) => {
    const currentTargetedController = event.target.nodeName;
    if (currentTargetedController === "INPUT") {
      const currentInputedMoney = event.target.value;
      const response = await getExchangedMoney(currentInputedMoney);
      const {
        data: { quotes, timestamp },
      } = response;
      console.log(quotes, timestamp);
    } else if (currentTargetedController === "SELECT") {
      const currentSelectedCountry = event.target.options[event.target.selectedIndex].value;
    }
  };
  return (
    <div className="calculateSecondForm">
      <div className="controllerHeader" onChange={checkInputedController}>
        <input className="rateInput" type="number" />
        <select className="rateSelected">
          {countryRates.map((countryRate, index) => {
            return (
              <option key={index} value={countryRate}>
                {countryRate}
              </option>
            );
          })}
        </select>
      </div>
      <CalculateRateBox />
    </div>
  );
};

export default CalculateSecondForm;
