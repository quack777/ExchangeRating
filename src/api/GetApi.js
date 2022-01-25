import client from "./client";

export const getApiOfExchangeRate = (currentSelectedCountry, currencies = '') => {
  return client.get("http://api.currencylayer.com/live", {
    params: {
      access_key: process.env.REACT_APP_API_KEY,
      source: currentSelectedCountry,
      currencies,
    },
  });
};


