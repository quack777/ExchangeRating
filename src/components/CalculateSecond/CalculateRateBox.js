import React, { useEffect, useState } from "react";
import "./CalculateRateBox.css";
import { setMonthConvert } from "../../utils/setMonthConvert";
import SetNumberFormat from "../../utils/SetNumberFormat";


const CalculateRateBox = ({ currentExchangedMoney, currentQuotes, currentTimeStamp, currentSelectedCurrency,  prevSelectedCurrency}) => {
  const [tabList, setTabList] = useState(["CAD", "KRW", "HKD", "JPY", "CNY"]);
  const [currentActiveTab, setCurrentActiveTab] = useState("CAD");
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
      if (key === currentClickedTab) {
        setCurrentActiveTab(key);
        setCurrentMoney(val * currentExchangedMoney);
      }
    }
  };

  useEffect(() => {
    for(let [key, val] of Object.entries(currentQuotes)) {
      if(key === currentActiveTab) {
        setCurrentMoney(val * currentExchangedMoney);
      }
    }
  }, [currentExchangedMoney]);
  
  useEffect(() => {
    for(let i = 0; i < tabList.length; i++) {
        if(tabList[i] === currentSelectedCurrency) {
        setCurrentActiveTab(prevSelectedCurrency);

        const newTabList = [...tabList];  
        newTabList[i] = prevSelectedCurrency;
        setTabList(newTabList);
      
        break;
      }
    }
  }, [currentQuotes, currentSelectedCurrency, prevSelectedCurrency]);
  
  return (
    <div className="CalculateRateBox">
      <ul className="tabs" onClick={checkCurrentActiveTab}>
        {tabList.map((rate, index) => {
          return (
            <li data-rate={rate} className={`tab ${rate === currentActiveTab && "active"}`} key={index}>
              {rate}
            </li>
          );
        })}
      </ul>
        <div className="tabsInfo">
          <p className="countryRate">{`${currentActiveTab} : ${currentExchangedMoney || currentMoney === 0 ? SetNumberFormat(currentMoney) : '올바른 송금액을 입력해 주세요'}`} </p>
          <p className="rateLiveDate">
            기준일: <br /> {currentTimeStamp && createDate()}
          </p>
        </div>
    </div>
  );
};

export default CalculateRateBox;
