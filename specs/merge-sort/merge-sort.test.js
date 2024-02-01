/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = nums => {
  // Function 1 - recursive, break the big list down into smaller lists

  // Base case
  if (nums.length < 2) return nums;

  // Find the middle index
  const middle = Math.floor(nums.length / 2);

  // Define left and right halves of the array
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // Call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Invoke merge on sortedLeft and sortedRight
  return merge(sortedLeft, sortedRight);
};

// function 2 - takes two sorted and returns back on sorted list (not recursive)
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      // it's like .pop() for the front
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // return one sorted array and concate any remaining elements from left and right
  return result.concat(left, right);
}

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
