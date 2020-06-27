import React, { FC } from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import LabelSummary from '../../components/LabelSummary';

interface Props {
  correct: number
  wrong: number
  onClick: () => void
};

const Summary:FC<Props> = ({ correct, wrong, onClick }: Props) => (
  <Card>
    <h3>Summary</h3>

    <LabelSummary title="Correct" value={correct} />

    <LabelSummary title="Wrong" value={wrong} />

    <LabelSummary title="Questions Answered" value={correct + wrong} />

    <LabelSummary title="Final Score" value={`${(correct / (correct + wrong)) * 100}%`} />

    <Button isReset type="button" onClick={onClick}>Restart Quiz</Button>
  </Card>
);

export default Summary;
