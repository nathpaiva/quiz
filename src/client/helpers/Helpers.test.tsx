import 'jest-styled-components';
import '@testing-library/jest-dom';

import { shuffle, spliteArray } from '.';

describe('Helpers', () => {
  test('should shuffle array', () => {
    const arr = [1, 2, 3];
    const newArr = shuffle(arr);
    expect(newArr).not.toBe(arr);
  });
  test('should shuffle array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const newArr = spliteArray(arr, 2);
    expect(newArr.length).toBe(3);
  });
});
