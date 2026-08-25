'use strict';

const convertEuroToRubles = (euro) => {
  const dollars = euro * 1.2;
  const rubles = dollars * 64;
  console.log(`${euro} евро = ${rubles} рублей`);
};

convertEuroToRubles(10);