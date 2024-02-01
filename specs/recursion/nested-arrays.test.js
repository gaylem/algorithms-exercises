/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

const { type } = require("requests");

function nestedAdd(array) {
  // Initialize sum variable
  let sum = 0;
  // Loop through nested array
  for (let i = 0; i < array.length; i++) {
    // Base case
    if (typeof array[i] === 'number') sum += array[i];
    // Recursive case
    if (Array.isArray(array[i])) sum += nestedAdd(array[i])
  }
  return sum;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
