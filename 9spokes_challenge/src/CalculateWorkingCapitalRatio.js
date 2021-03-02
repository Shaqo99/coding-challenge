function calculateWCR(assetTotal, assetSubtraction, liabilityTotal,liabilityTotalSubtraction){
    assetTotal = assetTotal - assetSubtraction;
    liabilityTotal = liabilityTotal - liabilityTotalSubtraction;
    let workingCapitalRatio = (assetTotal/liabilityTotal)*100;
    workingCapitalRatio = workingCapitalRatio.toLocaleString(undefined, {maximumFractionDigits:1});
    return workingCapitalRatio;
}

export default calculateWCR;