//Working Capital Ratio calculation

function calculateWCR(assetTotal, assetSubtraction, liabilityTotal,liabilityTotalSubtraction){
    assetTotal = assetTotal - assetSubtraction;
    liabilityTotal = liabilityTotal - liabilityTotalSubtraction;
    let workingCapitalRatio = (assetTotal/liabilityTotal)*100;
    //changes number to string and rounds it to 1 decimal point
    workingCapitalRatio = workingCapitalRatio.toLocaleString(undefined, {maximumFractionDigits:1});
    return workingCapitalRatio;
}

export default calculateWCR;