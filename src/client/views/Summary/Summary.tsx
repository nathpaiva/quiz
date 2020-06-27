import React, { FC } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

interface Props {
  correct: number
  wrong: number
  onClick: () => void
};

const Summary:FC<Props> = ({ correct, wrong, onClick }: Props) => (
  <Card>
    <h3>Summary</h3>
    <p>
      <strong>Correct:</strong>
      {' '}
      {correct}
    </p>

    <p>
      <strong>Wrong:</strong>
      {' '}
      {wrong}
    </p>

    <p>
      <strong>Questions Answered:</strong>
      {' '}
      {correct + wrong}
    </p>
    <p>
      <strong>Final Score:</strong>
      {' '}
      {`${(correct / (correct + wrong)) * 100}%`}
    </p>

    <Button isReset type="button" onClick={onClick}>Restart Quiz</Button>
  </Card>
);

export default Summary;
