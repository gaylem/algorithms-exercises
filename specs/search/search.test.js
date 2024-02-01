// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]['id'] === id) return array[i];
  }
  return 'Object does not exist';
}

//* RECURSIVE SOLUTION
// function binarySearch(id, array) {
//   // Find the element in middle of the array
//   const middle = Math.floor(array.length / 2);

//   // Find id property in object
//   const idVal = array[middle]['id'];
//   console.log('idVal: ', idVal);

//   // Base cases
//   if (id === idVal) return array[middle];
//   if (array.length === 1) return array[0];
//   if (array.length === 0) return 'Object does not exist';
//   // Recursive cases
//   else if (id > idVal) return binarySearch(id, array.slice(middle));
//   else return binarySearch(id, array.slice(0, middle));
// }

//* ITERATIVE SOLUTION
function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return void 0;
}

// unit tests
// do not modify the below code
test('linear search', function () {
  const lookingFor = { id: 5, name: 'Brian' };
  expect(linearSearch(5, [{ id: 1, name: 'Sam' }, { id: 11, name: 'Sarah' }, { id: 21, name: 'John' }, { id: 10, name: 'Burke' }, { id: 13, name: 'Simona' }, { id: 31, name: 'Asim' }, { id: 6, name: 'Niki' }, { id: 19, name: 'Aysegul' }, { id: 25, name: 'Kyle' }, { id: 18, name: 'Jem' }, { id: 2, name: 'Marc' }, { id: 51, name: 'Chris' }, lookingFor, { id: 14, name: 'Ben' }])).toBe(lookingFor);
});

test('binary search', function () {
  const lookingFor = { id: 23, name: 'Brian' };
  expect(binarySearch(23, [{ id: 1, name: 'Sam' }, { id: 3, name: 'Sarah' }, { id: 5, name: 'John' }, { id: 6, name: 'Burke' }, { id: 10, name: 'Simona' }, { id: 12, name: 'Asim' }, { id: 13, name: 'Niki' }, { id: 15, name: 'Aysegul' }, { id: 17, name: 'Kyle' }, { id: 18, name: 'Jem' }, { id: 19, name: 'Marc' }, { id: 21, name: 'Chris' }, lookingFor, { id: 24, name: 'Ben' }])).toBe(lookingFor);
});
