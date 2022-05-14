const isNif = require('../functions/validate-nif'); 

test('Valid NIF', () => {
    expect(isNif(220000000)).toBeTruthy();
});

test('Invalid NIF - STRING', () => {
    expect(isNif("NIF")).toBeFalsy();
});

test('Invalid NIF', () => {
    expect(isNif(22000)).toBeFalsy();
});
