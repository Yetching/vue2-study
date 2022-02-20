// var obj = {};

// Object.defineProperty(obj, 'a', {
//   value: 10,

//   // 是否可写
//   writable: false,
// });

// console.log(obj);

// console.log(obj.a);

// obj.a = 11;

// console.log(obj.a);

// observe
import { Observe } from './Observe';

const obj = {
  a: {
    b: {
      c: {
        d: 99,
      },
    },
  },
  e: [1, 2, 3],
};

Observe(obj);

console.log(obj.a.b.c.d);

console.log(obj.e.push(10));
