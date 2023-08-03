import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'

import { Reset, Notification } from './components'
import { PATH as API } from './constants'
import { spliceArray, shuffle } from './helpers'
import { useFetchApi } from './hooks'
import { Question, QuestionsSchema, Summary } from './views'

interface IStateQuestionRound {
  total: number
  current: number
  currentListQuestion: QuestionsSchema[][]
}

const initialStateQuestionRound: IStateQuestionRound = {
  total: 0,
  current: 0,
  currentListQuestion: [],
}

interface IStateSummary {
  correct: number
  wrong: number
}

const initialStateSummary: IStateSummary = {
  correct: 0,
  wrong: 0,
}

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const App = () => {
  const quantityQuestionsPerMatch = 10
  const [{ data, isLoading, apiERROR }, fetchAPI] = useFetchApi()
  const [listQuestionsPerRound, setListQuestionsPerRound] =
    useState<IStateQuestionRound>(initialStateQuestionRound)
  const [matchStep, setMatchStep] = useState<number>(0)
  const [summary, setSummary] = useState<IStateSummary>(initialStateSummary)
  const [displaySummary, setDisplaySummary] = useState<boolean>(false)

  useEffect(() => {
    fetchAPI(API.QUESTIONS)
  }, [fetchAPI])

  const prepareQuestionsRound = (
    questionShuffle: QuestionsSchema[],
  ): IStateQuestionRound => ({
    total: questionShuffle.length / quantityQuestionsPerMatch,
    current: 0,
    currentListQuestion: spliceArray(
      questionShuffle,
      quantityQuestionsPerMatch,
    ),
  })

  const prepareGameToStart = useCallback(() => {
    const questionShuffle = shuffle(data)
    setListQuestionsPerRound(prepareQuestionsRound(questionShuffle))
  }, [data])

  useEffect(() => {
    prepareGameToStart()
  }, [prepareGameToStart, data])

  const handleClickSubmitQuestion = (isCorrect: boolean) => {
    const nextQuestion = matchStep + 1

    setSummary({
      correct: isCorrect ? summary.correct + 1 : summary.correct,
      wrong: !isCorrect ? summary.wrong + 1 : summary.wrong,
    })

    if (nextQuestion === listQuestionsPerRound.currentListQuestion.length) {
      setDisplaySummary(true)
      return
    }

    setMatchStep(nextQuestion)
  }

  const handleClickRestartQuiz = () => {
    const nextQuestionsRoundCurrent = listQuestionsPerRound.current + 1

    setMatchStep(0)
    setSummary({
      correct: 0,
      wrong: 0,
    })

    setDisplaySummary(false)

    if (
      nextQuestionsRoundCurrent ===
      listQuestionsPerRound.currentListQuestion.length
    ) {
      prepareGameToStart()
      return
    }

    setListQuestionsPerRound({
      ...listQuestionsPerRound,
      current: nextQuestionsRoundCurrent,
    })
  }

  const shuffleListAnswers = () => {
    const currentQuestion =
      listQuestionsPerRound.currentListQuestion[listQuestionsPerRound.current][
        matchStep
      ]
    if (currentQuestion.type === 'text') return null

    return shuffle(
      currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer),
    )
  }

  return (
    <Container>
      <Reset />
      {isLoading && <Notification>Loading...</Notification>}

      {apiERROR && (
        <Notification error>
          Sorry we have some problem to load questions...
        </Notification>
      )}

      {!!listQuestionsPerRound.currentListQuestion.length &&
        !displaySummary && (
          <Question
            question={
              listQuestionsPerRound.currentListQuestion[
                listQuestionsPerRound.current
              ][matchStep]
            }
            answers={shuffleListAnswers()}
            handleClick={handleClickSubmitQuestion}
          />
        )}

      {displaySummary && (
        <Summary
          correct={summary.correct}
          wrong={summary.wrong}
          onClick={handleClickRestartQuiz}
        />
      )}
    </Container>
  )
}
