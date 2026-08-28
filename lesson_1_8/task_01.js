'use strict';

const generateRandomarray = (count) => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1);
};

console.log(generateRandomarray(10));