const isNif = require("../functions/validate-nif");

test("Valid NIF", () => {
  expect(isNif(220000000)).toBeTruthy();
});

test("Invalid NIF", async () => {
  expect(() => {
    isNif(22000);
  }).toThrow("invalid_length");
});
