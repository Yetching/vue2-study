import { Observe } from './Observe';

var obj = {};

Object.defineProperty(obj, 'a', {
  // getter
  get() {
    console.log('visit a');
    return 10;
  },

  // setter
  set(newValue) {
    console.log(newValue);
  },
});

console.log(obj.a);

obj.a = 100;

console.log(obj.a); // 依然是10

// 因此我们应该将newValue赋予一个变量，在getter中每次返回这个变量
// 使用闭包来实现

/**
 *
 * @param {*} data
 * @param {*} key
 * @param {*} val
 */
export function defineReactive(data, key, val = data[key]) {
  Observe(val);

  Object.defineProperty(data, key, {
    get() {
      console.log('visit key');
      return val;
    },

    set(newValue) {
      console.log('change key value');
      if (newValue === val) return;
      val = newValue;
      // 监听新值
      Observe(newValue);
    },
  });
}

var obj2 = {};

defineReactive(obj2, 'key', 'value');

console.log(obj2.key);

obj2.key = 'block';

console.log(obj2.key);
