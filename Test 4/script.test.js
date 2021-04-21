const multiplication = require("./script");

test("multiplication 3 * 4 is equal to 12", () => {
  expect(multiplication(3, 4)).toBe(12);
});

test("multiplication 3 * 5 is equal to 15", () => {
  expect(multiplication(3, 5)).toBe(15);
});
