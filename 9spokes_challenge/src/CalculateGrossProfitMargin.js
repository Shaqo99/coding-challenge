//Gross Profit Margin Calculation

function calculateGPM(salesTotal, revenueTotal){
    let grossProfitMargin = (salesTotal / revenueTotal) * 100;
    //changes number to string and rounds it to 1 decimal point
    grossProfitMargin = grossProfitMargin.toLocaleString(undefined, {maximumFractionDigits:1});
    return grossProfitMargin;
}

export default calculateGPM;



