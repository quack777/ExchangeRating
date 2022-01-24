import React, { useState } from 'react';
import CalculateRateBox from './CalculateRateBox.js';
import './CalculateSecondForm.css';

const CalculateSecondForm = () => {
    const [countryRates, setCountryRates] = useState(['USD', 'KRW', 'HKD', 'JPY', 'CNY'])

    return (
        <div className="container">
            <div className="controllerHeader">
                <input type="number" />
                <select>
                    {
                        countryRates.map((countryRate, index) => {
                        return <option key={index} value={countryRate}>{countryRate}</option>
                        })
                    }
                </select>
            </div>
            <CalculateRateBox />
        </div>
    )
}

export default CalculateSecondForm;