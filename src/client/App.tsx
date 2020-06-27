import React, {
  FC, useEffect, useState, useCallback,
} from 'react';
import styled from 'styled-components';
import {
  spliteArray,
  shuffle,
} from './helpers';

import Reset from './components/Reset';

import Question from './views/Question';
import Summary from './views/Summary';

interface IStateQuestionRound {
  total: number
  current: number
  currentListQuestion: any
}

const initialStateQuestionRound: IStateQuestionRound = {
  total: 0,
  current: 0,
  currentListQuestion: [],
};

interface IStateSummary {
  correct: number
  wrong: number
}

const initialStateSummary: IStateSummary = {
  correct: 0,
  wrong: 0,
};

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const App:FC = () => {
  const quantityQuestionsPerMatch = 10;
  const [listQuestions, setListQuestions] = useState<[]>([]);
  const [questionsRound, setQuestionsRound] = useState<IStateQuestionRound>(
    initialStateQuestionRound,
  );
  const [matchStep, setMatchStep] = useState<number>(0);
  const [summary, setSummary] = useState<IStateSummary>(initialStateSummary);
  const [displaySumary, setDisplaySumary] = useState<boolean>(false);

  const prepareQuestionsRound = (questionShuffle: any): IStateQuestionRound => ({
    total: questionShuffle.length / quantityQuestionsPerMatch,
    current: 0,
    currentListQuestion: spliteArray(questionShuffle, quantityQuestionsPerMatch),
  });

  const prepareGameToStart = useCallback(() => {
    const questionShuffle = shuffle(listQuestions);
    setQuestionsRound(prepareQuestionsRound(questionShuffle));
  }, [listQuestions]);

  useEffect(() => {
    const fetchApiQuestions = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/questions');
        const { results } = await response.json();

        setListQuestions(results);
      } catch (error) {
        setListQuestions([]);
      }
    };
    fetchApiQuestions();
  }, []);

  useEffect(() => {
    prepareGameToStart();
  }, [prepareGameToStart, listQuestions]);

  const handleClickSubmitQuestion = (isCorrect: boolean) => {
    const nextQuestion = matchStep + 1;

    setSummary({
      correct: isCorrect ? (summary.correct + 1) : summary.correct,
      wrong: !isCorrect ? (summary.wrong + 1) : summary.wrong,
    });

    if (nextQuestion === questionsRound.currentListQuestion.length) {
      setDisplaySumary(true);
      return;
    }

    setMatchStep(nextQuestion);
  };

  const handleClickRestartQuiz = () => {
    const nextQuestionsRoundCurrent = questionsRound.current + 1;

    setMatchStep(0);
    setSummary({
      correct: 0,
      wrong: 0,
    });

    setDisplaySumary(false);

    if (nextQuestionsRoundCurrent === questionsRound.currentListQuestion.length) {
      prepareGameToStart();
      return;
    }

    setQuestionsRound({
      ...questionsRound,
      current: nextQuestionsRoundCurrent,
    });
  };

  const shuffleListAnswers = () => {
    const currentQuestion = questionsRound.currentListQuestion[questionsRound.current][matchStep];
    if (currentQuestion.type === 'text') return null;

    return shuffle(currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer));
  };

  return (
    <Container>
      <Reset />
      {!!questionsRound.currentListQuestion.length && !displaySumary && (
        <Question
          question={questionsRound.currentListQuestion[questionsRound.current][matchStep]}
          answers={shuffleListAnswers()}
          handleClick={handleClickSubmitQuestion}
        />
      )}

      {displaySumary && (
        <Summary
          correct={summary.correct}
          wrong={summary.wrong}
          onClick={handleClickRestartQuiz}
        />
      )}
    </Container>
  );
};
