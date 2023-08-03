import { useState } from 'react'

import { Button, Card, Input, InputText } from '../../components'

export interface QuestionsSchema {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface QuestionProps {
  question: QuestionsSchema
  answers: string[] | null
  handleClick: (isCorrect: boolean) => void
}

const generateKey = (index: number, correctAnswer: string) =>
  `${index}-${correctAnswer.replace(/ /g, '')}`

export const Question = ({ question, handleClick, answers }: QuestionProps) => {
  const [selectable, setSelectable] = useState<string>('')
  return (
    <Card
      as="form"
      onSubmit={(event) => {
        event.preventDefault()
        const isCorrect =
          selectable.toLocaleLowerCase() ===
          question.correct_answer.toLocaleLowerCase()
        handleClick(isCorrect)
        setSelectable('')
      }}
    >
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers && (
        <ul>
          {answers.map((answer: string, index: number) => (
            <li key={generateKey(index, question.correct_answer)}>
              <Input answer={answer} onChange={setSelectable} />
            </li>
          ))}
        </ul>
      )}

      {!answers && (
        <InputText answer={question.question} onChange={setSelectable} />
      )}

      <Button disabled={!selectable} type="submit">
        Next question
      </Button>
    </Card>
  )
}
