function calculateGPM(salesTotal, revenueTotal){
    let grossProfitMargin = (salesTotal / revenueTotal) * 100;
    grossProfitMargin = grossProfitMargin.toLocaleString(undefined, {maximumFractionDigits:1});
    return grossProfitMargin;
}

export default calculateGPM;



