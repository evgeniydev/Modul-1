'use strict';

function getLeapYears(n, m) {
  // Определяем границы диапазона независимо от порядка n и m
  const start = Math.min(n, m);
  const end = Math.max(n, m);

  const leapYears = [];

  for (let year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }

  return leapYears;
}

// Пример использования
console.log(getLeapYears(2000, 2010));
console.log(getLeapYears(10, -10));
console.log(getLeapYears(-1900, -1890));