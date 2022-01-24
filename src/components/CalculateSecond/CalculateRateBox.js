import React from 'react';

const CalculateRateBox = ({test}) => {
    const rateList = ['CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

    return (
        <div className="container">
            <ul className="tabs">
                {
                    rateList.map((rate, index) => {
                        return (
                        <li className={`tab ${rate === test && 'actice'}`} key={index}>{rate}</li>
                        )
                    })
                }
            </ul>
            <div className="tabsInfo">
                <p className="countryRate">2,000.00</p>
                <p className="rateLiveDate">기준일: <br /> 2022-Jan-01</p>
            </div>
        </div>
    )
}

export default CalculateRateBox;