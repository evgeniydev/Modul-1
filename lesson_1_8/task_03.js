'use strict';

const generateRandomarray = (count, n, m, filter) => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  const arr = Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

  if (filter === 'even') {
    return arr.filter((num) => num % 2 === 0);
  }

  if (filter === 'odd') {
    return arr.filter((num) => num % 2 !== 0);
  }

  return arr;
};

console.log(generateRandomarray(10, -5, 20));
console.log(generateRandomarray(10, 20, -5));
console.log(generateRandomarray(10, -5, 20, 'even'));
console.log(generateRandomarray(10, -5, 20, 'odd'));