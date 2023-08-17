import { render } from '@testing-library/react'
import React from 'react'

import { Card } from '.'

describe('Card', () => {
  test('should render a card with message', () => {
    const { getByText } = render(<Card>My card</Card>)
    const getElement = getByText('My card')
    expect(getElement).toBeInTheDocument()
    expect(getElement).toHaveStyleRule(
      'box-shadow',
      '0 0 4px rgba(0, 0, 0, 0.06),0 4px 12px rgba(0, 0, 0, 0.06),0 16px 24px rgba(0, 0, 0, 0.06),0 24px 32px rgba(0, 0, 0, 0.06)',
    )
  })
})
