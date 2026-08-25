'use strict';

// Скидка 3% ко всей сумме, если товаров больше 10
const applyBulkDiscount = (sum, itemsCount) =>
  itemsCount > 10 ? sum * 0.97 : sum;

// Скидка 15% на сумму, превышающую 30000
const applyThresholdDiscount = (sum) =>
  sum > 30000 ? 30000 + (sum - 30000) * 0.85 : sum;


// Скидка 10% по промокоду METHED
const applyMethedPromo = (sum, promoCode) =>
  promoCode === "METHED" ? sum * 0.9 : sum;

// Скидка 500 рублей по промокоду G3H2Z1, если сумма превышает 2000
const applyFixedPromo = (sum, promoCode) =>
  promoCode === "G3H2Z1" && sum > 2000 ? sum - 500 : sum;

// Основная функция, применяющая все скидки по порядку
const calculate = (totalSum, itemsCount, promoCode) => {
  let result = totalSum;
  result = applyBulkDiscount(result, itemsCount);
  console.log(result);
  result = applyThresholdDiscount(result);
  console.log(result);
  result = applyMethedPromo(result, promoCode);
  console.log(result);
  result = applyFixedPromo(result, promoCode);
  console.log(result);

  console.log(`Итоговая стоимость корзины: ${result}`);
};

calculate(35000, 12, "METHED");