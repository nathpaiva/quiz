import { render } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  test('should render default button', () => {
    const { getByText } = render(<Button>Next question</Button>)
    const getElement = getByText('Next question')
    expect(getElement).toBeInTheDocument()
    expect(getElement).toHaveStyleRule('background-color', '#2C7FB8')
  })
  test('should render a reset button', () => {
    const { getByText } = render(<Button $isReset>Restart Quiz</Button>)
    const getElement = getByText('Restart Quiz')
    expect(getElement).toBeInTheDocument()
    expect(getElement).toHaveStyleRule('background-color', '#333333')
  })
})
