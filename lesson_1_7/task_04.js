'use strict';

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

function getAveragePriceGoods(cashbox) {
  const { totalCount, totalSum } = cashbox.reduce(
    (acc, [count, sum]) => {
      acc.totalCount += count;
      acc.totalSum += sum;
      return acc;
    },
    { totalCount: 0, totalSum: 0 }
  );

  if (totalCount === 0) return 0;

  return totalSum / totalCount;
}

console.log(getAveragePriceGoods(allСashbox));