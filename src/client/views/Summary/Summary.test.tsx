import { render, fireEvent } from '@testing-library/react'

import { Summary } from '.'

describe('Summary', () => {
  test('should render a Summary', () => {
    const correct = 3
    const wrong = 5
    const onClick = vi.fn()
    const { getByText } = render(
      <Summary correct={correct} wrong={wrong} onClick={onClick} />,
    )

    expect(getByText('Correct:')).toBeInTheDocument()
    expect(getByText(`${correct}`)).toBeInTheDocument()
    expect(getByText('Wrong:')).toBeInTheDocument()
    expect(getByText(`${wrong}`)).toBeInTheDocument()
    expect(getByText('Questions Answered:')).toBeInTheDocument()
    expect(getByText(`${correct + wrong}`)).toBeInTheDocument()
    expect(getByText('Final Score:')).toBeInTheDocument()
    expect(
      getByText(`${(correct / (correct + wrong)) * 100}%`),
    ).toBeInTheDocument()
    const button = getByText('Restart Quiz')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
