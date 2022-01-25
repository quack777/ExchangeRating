import React, { useLayoutEffect, useState } from "react";
import "./CalculateRateBox.css";
import { setMonthConvert } from "../../utils/setMonthConvert";
import SetNumberFormat from "../../utils/SetNumberFormat";

const regExp = /[,]/g;

const CalculateRateBox = ({ currentExchangedMoney, currentQuotes, currentTimeStamp, currentSelectedCurrency }) => {
  const [rateList, setRateList] = useState(["CAD", "KRW", "HKD", "JPY", "CNY"]);
  const [currentActiveCurrency, setCurrentActiveCurrency] = useState("CAD");
  const [currentMoney, setCurrentMoney] = useState(0);

  const createDate = () => {
    const date = new Date(currentTimeStamp * 1000);

    const years = date.getFullYear();
    const month = setMonthConvert(date.getMonth());
    const day = date.getDay();

    return `${years} ${month} ${day}`;
  };

  const checkCurrentActiveTab = (event) => {
    const currentClickedTab = event.target.dataset.rate;

    for (let [key, val] of Object.entries(currentQuotes)) {
      const currentCurrency = key.slice(3, key.length);

      if (currentCurrency === currentClickedTab) {
        const convert = currentExchangedMoney.replace(regExp, "");
        console.log(convert);
        setCurrentActiveCurrency(convert);
        setCurrentMoney(val * Number(convert));
      }
    }
  };

  useLayoutEffect(() => {
    if (currentSelectedCurrency === "CAD") {
      const newRateList = [...rateList];
      newRateList[0] = "USD";

      setRateList(newRateList);
      setCurrentActiveCurrency("USD");
    } else if (currentSelectedCurrency === "USD") {
      const newRateList = [...rateList];
      newRateList[0] = "CAD";

      setRateList(newRateList);
      setCurrentActiveCurrency("CAD");
    }

    if (currentActiveCurrency === "CAD") {
      const currentQuote = !currentQuotes["USDCAD"] ? 0 : currentQuotes["USDCAD"];

      // const convert = currentExchangedMoney.replace(regExp, "");
      // setCurrentMoney(currentQuote * Number(convert));
      // console.log(currentExchangedMoney);
    }
  }, [currentExchangedMoney, currentSelectedCurrency]);
  console.log(currentExchangedMoney.length);
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
      {currentExchangedMoney.length < 5 || !currentExchangedMoney ? (
        <div className="tabsInfo">
          <p className="countryRate">{`${currentActiveCurrency} : ${SetNumberFormat(currentMoney)}`} </p>
          <p className="rateLiveDate">
            기준일: <br /> {currentTimeStamp && createDate()}
          </p>
        </div>
      ) : (
        <p className="alertMessage">송금액이 바르지 않습니다</p>
      )}
    </div>
  );
};

export default CalculateRateBox;
