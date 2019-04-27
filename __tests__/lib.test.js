import { calcSum } from '../src/lib.js';

test('Calculates sales sum', () => {
    const sales = [12000, 8000, 10000, 15000, 2000];
    const expected = 48350;
    const result = calcSum(sales);
    expect(result).toBe(expected);
})
