export function add(x: number): any {
  let a: number[] = [];
  let f = function (n: number) {
    a.push(n);
    return f;
  };
  f.valueOf = function () {
    return a.reduce(function (i: number, a: number) {
      return i + a;
    }, x);
  };
  return f;
}
