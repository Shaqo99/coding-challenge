//Net profit margin calculation

function calculateNPM(expenseTotal, revenueTotal){
    let netProfitMargin = ((expenseTotal - revenueTotal)/ revenueTotal) * 100;
    //changes number to string and rounds it to 1 decimal point
    netProfitMargin = netProfitMargin.toLocaleString(undefined, {maximumFractionDigits:1});
    return netProfitMargin;
}

export default calculateNPM;