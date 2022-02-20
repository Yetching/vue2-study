// 改写数组方法

const arrayPrototype = Array.prototype;

export const changedMethods = Object.create(arrayPrototype);

const methods = ['push', 'pop'];

methods.forEach((item) => {
  const originMethod = arrayPrototype[item];

  Object.defineProperty(changedMethods, item, {
    value: function () {
      originMethod.apply(this, arguments);
      console.log('数组更改');
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
});
