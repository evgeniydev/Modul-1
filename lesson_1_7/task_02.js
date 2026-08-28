'use strict';

function getAverageValue(arr) {
  const sum = arr.reduce((acc, value) => acc + value, 0);
  return Math.floor(sum / arr.length);
}

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allСashbox));