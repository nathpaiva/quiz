import { render } from '@testing-library/react'

import { Label } from '.'

describe('Label', () => {
  test('should render a Label with title and value', () => {
    const { getByText } = render(<Label title="Hello" value={5} />)

    expect(getByText('Hello:')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
  })
})
