const tableMultipier = require("./script");

test("tableMultipier 2 / 0 is equal to 0", () => {
  expect(tableMultipier(undefined)).toBe(10);
});

test("tableMultipier 2 / 0 is equal to 0", () => {
  expect(tableMultipier(3, 4)).toBe(0, 3, 6, 9, 12);
});
