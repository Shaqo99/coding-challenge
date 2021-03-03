//Unit test for expense equation

const calculateExpense = require('./CalculateExpense').default;

test('Expense calculation is run correctly', () => {
    expect(calculateExpense(50010,24456)).toBe(74466);
    expect(calculateExpense("string","anotherstring")).not.toBe(1000);
});
