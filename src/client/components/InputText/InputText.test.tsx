import { render, fireEvent } from '@testing-library/react'

import { InputText } from '.'

describe('InputText', () => {
  test('should render a InputText', () => {
    const onChange = vi.fn()
    const { getByLabelText } = render(
      <InputText answer="Hello?" onChange={onChange} />,
    )

    const inputText = getByLabelText('Type your response:')
    fireEvent.change(inputText, { target: { value: '2020' } })
    // TODO: change this code to have the correct type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect((inputText as any).value).toBe('2020')
  })
})
