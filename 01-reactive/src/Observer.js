// 递归
// Object.defineProperty只会对对应的属性进行劫持
// 如果属性值是对象，其嵌套的元素的不会触发响应式getter

const { defineReactive } = require('./defineReactive');

import { changedMethods } from './array';

// Todo: 作用是将一个正常的object转换为每个层级属性都是响应式的(可被侦测的)
export class Observer {
  constructor(obj) {
    Object.defineProperty(obj, '__ob__', {
      value: this,
      enumerable: false,
      writable: true,
      configurable: true,
    });

    if (Array.isArray(obj)) {
      Object.setPrototypeOf(obj, changedMethods);
    } else {
      this.walk(obj);
    }
  }

  walk(obj) {
    for (let key in obj) {
      defineReactive(obj, key);
    }
  }
}
