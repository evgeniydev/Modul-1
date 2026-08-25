'use strict';

const firstNumber = Number(prompt("Введите первое число"));
const secondNumber = Number(prompt("Введите второе число"));

const findMin = (a, b) => (a + b - Math.abs(a - b)) / 2;

console.log(findMin(firstNumber, secondNumber));