import React, { useEffect, useState } from "react";
import CalculateRateBox from "./CalculateRateBox.js";
import "./CalculateSecondForm.css";
import { getApiOfExchangeRate } from '../../api/GetApi';
import { inputPriceFormat } from "../../utils/SetNumberFormat";

const CalculateSecondForm = () => {
  const [defaultQuotes, setDefaultQuotes] = useState({});
  const [currentQuotes, setCurrentQuotes] = useState({});
  const [currentTimeStamp, setCurrentTimeStamp] = useState('');
  const [currentExchangedMoney, setCurrentExchangedMoney] = useState(0);
  const [prevSelectedCurrency, setPrevSelectedCurrency] = useState("");
  const [currentSelectedCurrency, setCurrentSelectedCurrency] = useState("USD");
  const [convertNum, setConvertNum] = useState('');

  const countryRates = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

  const checkInputedController = async (event) => {
    const currentTargetedController = event.target.nodeName;
    if (currentTargetedController === "INPUT") {
      let currentInputValue = event.target.value; 
      currentInputValue = currentInputValue.replace(/[,]/g, '');

      const currentInputedMoney = Number(currentInputValue);
      setCurrentExchangedMoney(currentInputedMoney);

    } else if (currentTargetedController === "SELECT") {
      const selectedCurrency = event.target.options[event.target.selectedIndex].value;
      const selectedCurrencyRatio = defaultQuotes[currentSelectedCurrency];

      const newQuotes = {};

      for(let [key, val] of Object.entries(defaultQuotes)) {
          if(key === selectedCurrency) continue;
          newQuotes[key] = val / selectedCurrencyRatio; 
      }
      
      setPrevSelectedCurrency(currentSelectedCurrency);
      setCurrentSelectedCurrency(selectedCurrency);
      setCurrentQuotes({...newQuotes});
  };
}

  useEffect(() => {
    const getCurrentCurrencies = async () => {
      const response = await getApiOfExchangeRate('USD', countryRates.join(','));
      const {
        data: { quotes, timestamp },
      } = response;

      const convertedQuotes = {
        'USD': quotes.USDUSD,
        'CAD': quotes.USDCAD,
        'KRW': quotes.USDKRW,
        'HKD': quotes.USDHKD,
        'JPY': quotes.USDJPY,
        'CNY': quotes.USDCNY,
      }

      setDefaultQuotes({ ...convertedQuotes });

      delete convertedQuotes['USD'];

      setCurrentQuotes({...convertedQuotes});
      setCurrentTimeStamp(timestamp);
    };

    getCurrentCurrencies();
  }, []);
  
  return (
    <div className="calculateSecondForm">
      <div className="controllerHeader" onChange={checkInputedController}>
        <input placeholder="금액 입력" className="rateInput" type="text" value={convertNum} onChange={(e) => setConvertNum(inputPriceFormat(e.target.value))} />
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
      <CalculateRateBox currentExchangedMoney={currentExchangedMoney} currentQuotes={currentQuotes} currentTimeStamp={currentTimeStamp} currentSelectedCurrency={currentSelectedCurrency} prevSelectedCurrency={prevSelectedCurrency} />
    </div>
  );
};

export default CalculateSecondForm;
