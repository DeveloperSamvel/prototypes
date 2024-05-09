import {human} from './human.js';

const student = Object.create(human);
student.university = "YSU";
student.greeting = function () {
  return `${human.greeting()}. I am study in ${this.university}`;
};

console.log(student.greeting());
