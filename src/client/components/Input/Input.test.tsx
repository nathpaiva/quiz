import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import Input from '.';

describe('Input', () => {
  test('should render a Input radio', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <>
        <Input answer="first" onChange={onChange} />
        <Input answer="second" onChange={onChange} />
      </>,
    );

    const radio = getByLabelText('first');
    fireEvent.change(radio, { target: { value: 'second' } });
    expect(radio.value).toBe('second');
  });
});
