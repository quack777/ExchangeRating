const GetExchangeRateByUSD = (exchangeRateData, currentExchangeRate,currentSelectedCountry, selectedEndCountry ) => {
    if(currentSelectedCountry === "USD"){
        return currentExchangeRate;
    }else{
        const exchangeRateOfEndCountry = exchangeRateData[`USD${selectedEndCountry}`];
        return exchangeRateOfEndCountry/currentExchangeRate
    }
};

export default GetExchangeRateByUSD;