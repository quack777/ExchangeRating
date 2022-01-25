import client from "../pages/Main/lib/api/client";

const GetApi = (currentInputedMoney, currentSelectedCountry) => {
  return client.get("http://api.currencylayer.com/live", {
    params: {
      access_key: process.env.REACT_APP_API_KEY,
      source: currentSelectedCountry,
      amount: currentInputedMoney,
    },
  });
};

export default GetApi;
