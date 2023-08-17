import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { Question } from '.'
import { QuestionsSchema } from './Question'

describe('Question', () => {
  const onClick = vi.fn()
  const question = {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which game did "Sonic The Hedgehog" make his first appearance in?',
    correct_answer: 'Rad Mobile',
    incorrect_answers: [],
  } as QuestionsSchema

  test('should render a Question with multiple choice', () => {
    question.incorrect_answers = [
      'Sonic The Hedgehog',
      'Super Mario 64',
      'Mega Man',
    ]
    const answers = [
      'Rad Mobile',
      'Sonic The Hedgehog',
      'Super Mario 64',
      'Mega Man',
    ]
    const { getByText, getByLabelText } = render(
      <Question question={question} answers={answers} handleClick={onClick} />,
    )

    expect(getByText(question.question)).toBeInTheDocument()
    expect(getByText(question.correct_answer)).toBeInTheDocument()

    const radio = getByLabelText(question.incorrect_answers[0])
    expect(radio).toBeInTheDocument()
    fireEvent.click(radio, { target: { value: question.incorrect_answers[0] } })
    expect(radio.checked).toBe(true)

    expect(getByLabelText(question.incorrect_answers[1])).toBeInTheDocument()
    expect(getByLabelText(question.incorrect_answers[2])).toBeInTheDocument()
    expect(getByLabelText(question.incorrect_answers[2])).toBeInTheDocument()

    const button = getByText('Next question')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  test('should render test with text input', () => {
    question.type = 'text'

    const { getByLabelText } = render(
      <Question question={question} answers={null} handleClick={onClick} />,
    )

    const inputText = getByLabelText('Type your response:')
    fireEvent.keyPress(inputText, { target: { value: '2020' } })
    expect(inputText.value).toBe('2020')
  })
})
