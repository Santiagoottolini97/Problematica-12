const division = require("./script");

test("division 2 / 0 is equal to 0", () => {
  expect(division(2,0)).toBe("No se puede dividir por 0");
});

test("division 6 / 2 is equal to 3", () => {
  expect(division(6,2)).toBe(3);
});

test("division 8 / 2 is equal to 4", () => {
  expect(division(8,2)).toBe(4);
});



