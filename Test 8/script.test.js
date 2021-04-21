const nested = require("./script");

test("square 2² + 3² is equal to 13", () => {
  expect(nested(2, 3)).toBe(13);
}); 

test("square 2² + 4² is equal to 20", () => {
  expect(nested(2, 4)).toBe(20);
}); 

