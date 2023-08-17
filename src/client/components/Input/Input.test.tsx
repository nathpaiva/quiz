import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { Input } from '.'

describe('Input', () => {
  test('should render a Input radio', () => {
    const onChange = vi.fn()
    const { getByLabelText } = render(
      <>
        <Input answer="first" onChange={onChange} />
        <Input answer="second" onChange={onChange} />
      </>,
    )

    const radio = getByLabelText('first')
    fireEvent.change(radio, { target: { value: 'second' } })
    expect((radio as any).value).toBe('second')
  })
})
