export default function add(x: number): any {
  let s: number = x;
  const f = function (n: number) {
    s += n;
    return f;
  };
  f.valueOf = function () {
    return s;
  };
  return f;
}
