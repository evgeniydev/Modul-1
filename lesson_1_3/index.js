'use strict';

{
  const nameItem = prompt('Введите наименование товара');
  const itemCount = +prompt("Введите количество товара");
  const itemCategory = +prompt("Введите категорию товара");
  const itemPrice = prompt("Введите цену за единицу товара");
  console.log(typeof(itemCount));
  console.log(`На складе ${itemCount} единиц(ы) товара ${nameItem} на сумму ${itemPrice * itemCount}`); 
}