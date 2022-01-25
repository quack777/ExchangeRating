import React, { useState } from "react";
import CalculateRateBox from "./CalculateRateBox.js";
import "./CalculateSecondForm.css";
import client from "../../pages/Main/lib/api/client";

const CalculateSecondForm = () => {
  const [countryRates, setCountryRates] = useState(["USD", "CAD", "KRW", "HKD", "JPY", "CNY"]);
  const [currentQuotes, setCurrentQuotes] = useState({});
  const [currentTimeStamp, setCurrentTimeStamp] = useState(0);
  const [currentExchangedMoney, setCurrentExchangedMoney] = useState(0);
  const [currentSelectedCurrency, setCurrentSelectedCurrency] = useState("USD");

  const exceptSelectedCurrencies = (currentSelectedCurrency) => {
    const filteredCountryRates = countryRates.filter(countryRate=> countryRate !== currentSelectedCurrency );
    return filteredCountryRates;
  }

  const getExchangedMoney = (amount, source, currencies) => {
    
    return client.get("http://api.currencylayer.com/live", {
      params: {
        access_key: process.env.REACT_APP_API_KEY,
        source: 'USD', // test
        currencies: currencies.join(','),
        amount,
      },
    });
  };

  const checkInputedController = async (event) => {
    const currentTargetedController = event.target.nodeName;
    if (currentTargetedController === "INPUT") {
      const currentInputedMoney = event.target.value;

      const exceptedCurrencies = exceptSelectedCurrencies(currentSelectedCurrency);
      const response = await getExchangedMoney(currentInputedMoney, currentSelectedCurrency, exceptedCurrencies);
      const {
        data: { quotes, timestamp },
      } = response;
      
      setCurrentQuotes({...currentQuotes, ...quotes});
      setCurrentTimeStamp(timestamp);

      setCurrentExchangedMoney(currentInputedMoney);
      
    } else if (currentTargetedController === "SELECT") {
      const currentSelectedCurrency = event.target.options[event.target.selectedIndex].value;
      setCurrentSelectedCurrency(currentSelectedCurrency);

      const exceptedCurrencies = exceptSelectedCurrencies(currentSelectedCurrency);
      
      const response = await getExchangedMoney(currentExchangedMoney, currentSelectedCurrency, exceptedCurrencies);
      const { data: {quotes, timestamp} } = response;
      
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
      <CalculateRateBox currentExchangedMoney={currentExchangedMoney} currentQuotes={currentQuotes} currentTimeStamp={currentTimeStamp}/>
    </div>
  );
};

export default CalculateSecondForm;
