function SetNumberFormat(cost) {
  if (cost !== undefined) {
    let tmpCost = cost.toFixed(2);
    return tmpCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return false;
  }

  let tmpCost = cost.toFixed(2);
  return tmpCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const inputPriceFormat = (str) => {
  const comma = (str) => {
    str = String(str);
    const firstString = str.slice(0, 1);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, `${firstString},`);
  };
  const uncomma = (str) => {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  };
  return comma(uncomma(str));
};
export default SetNumberFormat;
