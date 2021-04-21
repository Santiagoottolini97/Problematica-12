const zero = require("./script");

test("Returns a string with leading zeros, the result is 000024", () => {
  expect(zero(24, 6)).toEqual("000024");
}); 

test("Returns a string with leading zeros, the result is 0000024", () => {
  expect(zero(24, 7)).toEqual("0000024");
}); 


