import { render } from '@testing-library/react'
import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { Notification } from '.'

describe('Notification', () => {
  test('should render loading message', () => {
    const { getByText } = render(<Notification>Loading...</Notification>)
    const getElement = getByText('Loading...')
    expect(getElement).toBeInTheDocument()
    expect(getElement).toHaveStyleRule('border', '1px solid gray')
  })
  test('should render error message', () => {
    const { getByText } = render(
      <Notification error>
        Sorry we have some problem to load questions..
      </Notification>,
    )
    const getElement = getByText(
      'Sorry we have some problem to load questions..',
    )
    expect(getElement).toBeInTheDocument()
    expect(getElement).toHaveStyleRule('border', '1px solid red')
  })
})
