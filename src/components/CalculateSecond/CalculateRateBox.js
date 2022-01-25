import React, { useEffect, useState } from "react";
import "./CalculateRateBox.css";

const CalculateRateBox = ({currentExchangedMoney, currentQuotes, currentTimeStamp}) => {
  const rateList = ["CAD", "KRW", "HKD", "JPY", "CNY"];
  const [currentActiveCurrency, setCurrentActiveCurrency] = useState('CAD');
  const [currentMoney, setCurrentMoney] = useState(0);
  
  const checkCurrentActiveTab = event => {
    const currentClickedTab = event.target.dataset.rate;
    
    for(let [key, val] of Object.entries(currentQuotes)) {
      const currentCurrency = key.slice(3, key.length);

      if(currentCurrency === currentClickedTab) {
        setCurrentActiveCurrency(currentCurrency);
        setCurrentMoney(val * Number(currentExchangedMoney));
      };
    }
  }
 
  useEffect(() => {
    if(currentActiveCurrency === 'CAD') {
      const currentQuote = !currentQuotes['USDCAD'] ? 0 : currentQuotes['USDCAD'];
      console.log(currentQuote);
      setCurrentMoney(currentQuote * Number(currentExchangedMoney))
    }
  }, [currentExchangedMoney])

  return (
    <div className="CalculateRateBox">
      <ul className="tabs" onClick={checkCurrentActiveTab}>
        {rateList.map((rate, index) => {
          return (
            <li data-rate={rate} className={`tab ${rate === currentActiveCurrency && "active"}`} key={index}>
              {rate}
            </li>
          );
        })}
      </ul>
      <div className="tabsInfo">
        <p className="countryRate">{`${currentActiveCurrency} : ${currentMoney}`} </p>
        <p className="rateLiveDate">
          기준일: <br /> 2022-Jan-01
        </p>
      </div>
    </div>
  );
};

export default CalculateRateBox;
