/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

// Insertion sort is better than bubble sort

function insertionSort(nums) {
  // Loop through the array beginning at index 1
  for (let i = 1; i < nums.length; i++) {
    // declare number to insert, this stores it because we will overwrite it before we insert it
    let numberToInsert = nums[i];
    let j;
    // Loop through again beginning at index i - 1
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move the numbers to the right until we find where to insert
      nums[j + 1] = nums[j];
    }
    // do the insertion
    nums[j + 1] = numberToInsert;
  }
  return nums;
}

const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const result = insertionSort(arr);
console.log(result);

// unit tests
// do not modify the below code
test.skip('insertion sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
