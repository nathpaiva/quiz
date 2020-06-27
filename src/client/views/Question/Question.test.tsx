import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import Question from '.';

describe('Question', () => {
  test('should render a Question', () => {
    const question = {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which game did "Sonic The Hedgehog" make his first appearance in?',
      correct_answer: 'Rad Mobile',
      incorrect_answers: [
        'Sonic The Hedgehog',
        'Super Mario 64',
        'Mega Man',
      ],
    };
    const answers = [
      'Rad Mobile',
      'Sonic The Hedgehog',
      'Super Mario 64',
      'Mega Man',
    ];
    const onClick = jest.fn();
    const { getByText } = render(
      <Question question={question} answers={answers} handleClick={onClick} />,
    );

    expect(getByText(question.question)).toBeInTheDocument();
    expect(getByText(question.correct_answer)).toBeInTheDocument();
    expect(getByText(question.incorrect_answers[0])).toBeInTheDocument();
    expect(getByText(question.incorrect_answers[1])).toBeInTheDocument();
    expect(getByText(question.incorrect_answers[2])).toBeInTheDocument();
    expect(getByText(question.incorrect_answers[2])).toBeInTheDocument();
    expect(getByText('Next question')).toBeInTheDocument();
  });
});
