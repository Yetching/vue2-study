// es6

import './style.less';
import './sheet.css';

class A {
  constructor() {
    this.x = 10;
  }

  say() {
    console.log(this.x);
  }
}

const a = new A();
a.say();

const arr = Array.from('hello');

console.log(arr);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22);
  }, 4000);
});

Promise.allSettled([p1, p2]).finally(() => {
  console.log('Done!');
});
