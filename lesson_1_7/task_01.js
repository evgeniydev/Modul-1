'use strict';

function filter(allStudents, failedStudents) {
  return allStudents.filter(student => !failedStudents.includes(student));
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents, failedStudents));