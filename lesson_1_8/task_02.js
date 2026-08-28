'use strict';

const generateRandomArray = (count, n, m) => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

console.log(generateRandomArray(10, -5, 20));
console.log(generateRandomArray(10, 20, -5));