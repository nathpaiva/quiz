import { FC, useState } from 'react'

import Card from '../../components/Card'
import Input from '../../components/Input'
import InputText from '../../components/InputText'
import Button from '../../components/Button'

interface Questions {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: Array<string>
}

interface Props {
  question: Questions
  answers: Array<string> | null
  handleClick: (isCorrect: boolean) => void
}

const generateKey = (index: number, correctAnswer: string) =>
  `${index}-${correctAnswer.replace(/ /g, '')}`

const ContainerQuestion: FC<Props> = ({
  question,
  handleClick,
  answers,
}: Props) => {
  const [selectable, setSelectable] = useState<string>('')
  return (
    <Card
      as="form"
      onSubmit={(event: any) => {
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

export default ContainerQuestion
