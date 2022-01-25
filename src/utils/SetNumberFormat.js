function SetNumberFormat(cost) {

    if(cost !== undefined) {
        let tmpCost = cost.toFixed(2);
        return tmpCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
        return false;
    }

}
export default SetNumberFormat;