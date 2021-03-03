const calculateGPM = require('./CalculateGrossProfitMargin').default;

test('Gross Profit Margin calculation is run correctly', () => {
    expect(calculateGPM(654056.5,8460.0)).toBe("7,731.2");
    expect(calculateGPM("string","anotherstring")).not.toBe(1000);
});


