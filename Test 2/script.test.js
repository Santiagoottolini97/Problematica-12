const sum = require("./script");

test("sum 33 + 66 is equal to 99", () => {
  expect(sum(33, 66)).toBe(99);
});
test("sum 33 + 67 is equal to 100", () => {
  expect(sum(33, 67)).toBe(100);
});
