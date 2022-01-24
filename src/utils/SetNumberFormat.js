function SetNumberFormat(cost) {
    let tmpCost = cost.toFixed(2);
    return tmpCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default SetNumberFormat;