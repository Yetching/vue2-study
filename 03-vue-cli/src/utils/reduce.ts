export function reduce(arr) {
  console.log('数组去重');
  return [...(new Set(arr) as any)];
}
