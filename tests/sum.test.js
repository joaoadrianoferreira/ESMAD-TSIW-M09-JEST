const sum = require('../functions/sum'); 

test('Valid Sum', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Invalid Sum', () => {
    expect(sum(1, 2)).not.toBe(4);
});