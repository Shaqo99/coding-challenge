const calculateNPM = require('./CalculateNetProfitMargin').default;

test('Net Profit Margin calculation is run correctly', () => {
    expect(calculateNPM(44560.5,8460.0)).toBe("426.7");
    expect(calculateNPM("string","anotherstring")).not.toBe(1000);
});


