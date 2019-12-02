export function add<T>(n: T): T | any {
  return function (a) {
    return a + n;
  }
  //return n;
}
