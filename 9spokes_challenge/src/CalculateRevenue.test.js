const calculateRevenue = require('./CalculateRevenue').default;

test('check revenue calculation', () => {
    expect(calculateRevenue(10000,24456)).toBe(34456);
});