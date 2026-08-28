'use strict';

function addPrefix(arr, prefix) {
  return arr.map(name => `${prefix} ${name}`);
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));