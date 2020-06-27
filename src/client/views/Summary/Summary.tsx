import React, { FC } from 'react';

interface Props {
  correct: number
  wrong: number
  onClick: () => void
};

const Summary:FC<Props> = ({ correct, wrong, onClick }: Props) => (
  <div style={{
    maxWidth: '400px', height: '200px', display: 'flex', flexFlow: 'column', justifyContent: 'space-between',
  }}
  >
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

    <button style={{ backgroundColor: 'red' }} type="button" onClick={onClick}>reset</button>
  </div>
);

export default Summary;
