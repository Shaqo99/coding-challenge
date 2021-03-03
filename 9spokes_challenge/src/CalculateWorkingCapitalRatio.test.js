//Unit test for working capital ratio equation

const calculateWCR = require('./CalculateWorkingCapitalRatio').default;

test('Working capital ratio calculation is run correctly', () => {
    expect(calculateWCR(44560.5,8460.0,10503,1510)).toBe("401.4");
    expect(calculateWCR("string","anotherstring")).not.toBe(1000);
});

