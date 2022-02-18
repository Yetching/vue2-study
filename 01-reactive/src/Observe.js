import { Observer } from './Observer';

export function Observe(obj) {
  if (typeof obj !== 'object') return;

  if (obj.__ob__) {
    return;
  } else {
    new Observer(obj);
  }
}
