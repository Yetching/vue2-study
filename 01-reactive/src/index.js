var obj = {};

Object.defineProperty(obj, 'a', {
  value: 10,

  // 是否可写
  writable: false,
});

console.log(obj);

console.log(obj.a);

obj.a = 11;

console.log(obj.a);
