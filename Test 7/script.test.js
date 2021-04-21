const potencia = require("./script");

test("multiplication 2³ is equal to 8", () => {
  expect(potencia(2, 3)).toBe(8);
});

test("multiplication 3³ is equal to 27", () => {
  expect(potencia(3, 3)).toBe(27);
});

