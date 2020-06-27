import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import LabelSummary from '.';

describe('LabelSummary', () => {
  test('should render a LabelSummary with title and value', () => {
    const { getByText } = render(<LabelSummary title="Hello" value={5} />);

    expect(getByText('Hello:')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });
});
