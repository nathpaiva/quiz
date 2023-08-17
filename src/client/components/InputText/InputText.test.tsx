import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { InputText } from '.'

describe('InputText', () => {
  test('should render a InputText', () => {
    const onChange = vi.fn()
    const { getByLabelText } = render(
      <InputText answer="Hello?" onChange={onChange} />,
    )

    const inputText = getByLabelText('Type your response:')
    fireEvent.change(inputText, { target: { value: '2020' } })
    expect(inputText.value).toBe('2020')
  })
})
