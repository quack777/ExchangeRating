import React from "react";
import "./CalculateRateBox.css";

const CalculateRateBox = () => {
  const rateList = ["CAD", "KRW", "HKD", "JPY", "CNY"];
  const test = "CAD";
  const money = "20,000.00";

  return (
    <div className="CalculateRateBox">
      <ul className="tabs">
        {rateList.map((rate, index) => {
          return (
            <li className={`tab ${rate === test && "active"}`} key={index}>
              {rate}
            </li>
          );
        })}
      </ul>
      <div className="tabsInfo">
        <p className="countryRate">{`${test} : ${money}`} </p>
        <p className="rateLiveDate">
          기준일: <br /> 2022-Jan-01
        </p>
      </div>
    </div>
  );
};

export default CalculateRateBox;
