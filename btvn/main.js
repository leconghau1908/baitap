
// Bài 1
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];

const commonElements = arr1.filter(item => arr2.includes(item));
console.log(commonElements);

// Bài 2
const arr = [1, 54, 6, 7];
const newArr = arr.map(item => item + 5);
console.log(newArr);

// Bài 3
const m = [1, 2, 4, 5, 6, 7];
const n = [3, 5, 675, 8, 96];

function removeElements(array) {
  const forbiddenValues = [1, 8, 10, 96, 7];
  return array.filter(item => !forbiddenValues.includes(item));
}

const filteredM = removeElements(m);
const filteredN = removeElements(n);

console.log(filteredM);
console.log(filteredN);

// Bài 4
const players = [
  { id: 11, name: 'Messi', age: 33 },
  { id: 12, name: 'Ronaldo', age: 34 },
  { id: 13, name: 'Young', age: 35 },
  { id: 14, name: 'Mane', age: 21 },
  { id: 15, name: 'Salah', age: 24 },
];

const playersModified = players.reduce((obj, player) => {
  obj[player.id] = player;
  return obj;
}, {});

console.log(playersModified);
