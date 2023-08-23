import { render, fireEvent } from '@testing-library/react'

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

    // TODO: change this code to have the correct type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect((radio as any).value).toBe('second')
  })
})
