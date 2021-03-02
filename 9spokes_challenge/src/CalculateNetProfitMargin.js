function calculateNPM(expenseTotal, revenueTotal){
    let netProfitMargin = ((expenseTotal - revenueTotal)/ revenueTotal) * 100;
    netProfitMargin = netProfitMargin.toLocaleString(undefined, {maximumFractionDigits:1});
    return netProfitMargin;
}

export default calculateNPM;