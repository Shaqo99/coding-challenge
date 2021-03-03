const calculateRevenue = require('./CalculateRevenue').default;

test('Revenue calculation is run correctly', () => {
    expect(calculateRevenue(10000,24456)).toBe(34456);
    expect(calculateRevenue("string",24456)).not.toBe(10020);
});
