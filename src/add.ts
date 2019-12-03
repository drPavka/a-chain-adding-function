const NewNumber = new Proxy(Number, {
  apply: function (target, $this, [b]) {
    return function (a) {
      return target(a + b)
    }.bind($this);
  }
});

export function add<T>(n: T): T | any {
  return NewNumber(n)
}
