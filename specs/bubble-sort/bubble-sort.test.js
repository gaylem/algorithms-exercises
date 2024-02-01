/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swapped = false;

  let i = 0;
  let j = 1;

  while (i < nums.length - 1 && j < nums.length) {
    if (nums[j] < nums[i]) {
      let temp = nums[i];
      console.log(nums);
      nums[i] = nums[j];
      nums[j] = temp;
      swapped = true;
    }
    i++;
    j++;
    swapped === true ? bubbleSort(nums) : nums;
  }
  return nums;
}

function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums
}

const arr = [1, 5, 4, 2, 3];
const result = bubbleSort(arr);
console.log(result);

// unit tests
// do not modify the below code
test('bubble sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

/*
In terms of efficiency, Insertion Sort and Bubble Sort both have an average and worst-case time complexity of O(n^2), making them less efficient compared to more advanced sorting algorithms like Merge Sort or QuickSort, which have an average time complexity of O(n log n).

However, between the two provided functions, the Insertion Sort implementation is generally more efficient than the Bubble Sort implementation for average cases. Here's a brief comparison:

Insertion Sort:

In the best-case scenario (when the array is already sorted), the time complexity is O(n).
In the average and worst-case scenarios, it is O(n^2).
It is an in-place sorting algorithm.
Bubble Sort:

In the best-case scenario (when the array is already sorted), the time complexity is O(n).
In the average and worst-case scenarios, it is O(n^2).
It is also an in-place sorting algorithm.
Despite the similar time complexities, the reason Insertion Sort tends to perform better in practice is that it has a more efficient inner loop, and on average, it performs fewer comparisons and swaps than Bubble Sort.

That said, for small datasets, or in cases where the data is nearly sorted, the differences in efficiency between these algorithms may not be significant. For larger datasets or datasets with varying levels of disorder, you might want to consider more efficient algorithms like Merge Sort or QuickSort.
*/