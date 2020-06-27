/* eslint-disable camelcase */
import React, {
  FC, useState,
} from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';

interface Questions {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>
};

interface Props {
  question: Questions,
  answers: Array<string>,
  handleClick: (isCorrect: boolean) => void
};

const ContainerQuestion:FC<Props> = ({
  question, handleClick, answers,
}: Props) => {
  const [selectable, setSelectable] = useState('');
  return (
    <Card
      as="form"
      onSubmit={(event: any) => {
        event.preventDefault();
        const isCorrect = selectable.toLocaleLowerCase() === question.correct_answer.toLocaleLowerCase();
        handleClick(isCorrect);
        setSelectable('');
      }}
    >
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers && (
        <ul>
          {answers.map((answer: string, index: number) => (
            <li key={index}>
              <label

                htmlFor={answer}
                onChange={() => {
                  setSelectable(answer);
                }}
              >
                <input type="radio" id={answer} name="answers" />
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </label>
            </li>
          ))}
        </ul>
      )}

      {!answers && (
        <input
          type="text"
          onChange={(event) => {
            setSelectable(event.target.value);
          }}
        />
      )}

      <Button disabled={!selectable} type="submit">
        Next question
      </Button>
    </Card>
  );
};

export default ContainerQuestion;
