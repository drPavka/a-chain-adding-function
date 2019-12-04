import {add} from '../src/add';

test('Single argument - return itself', () => {
  expect(0 + add(4)).toBe(4);
  expect(0 + add(45)).toBe(45);
});

test('Simple add 1+2', () => {

  expect(0 + add(1)(2)).toBe(3);
});

test('Three calls add 1+2+3', () => {
  expect(0 + add(1)(2)(3)).toBe(6);
});


