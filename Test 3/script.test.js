const sum = require("./script");

test("sub 2 - 3 is equal to -1", () => {
  expect(sum(2, 3)).toBe(-1);
});
test("sub 2 - 2 is equal to 0", () => {
  expect(sum(2, 2)).toBe(0);
});
