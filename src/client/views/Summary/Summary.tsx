import { Button, Card, Label } from '../../components'

interface SummaryProps {
  correct: number
  wrong: number
  onClick: () => void
}

export const Summary = ({ correct, wrong, onClick }: SummaryProps) => (
  <Card>
    <h3>Summary</h3>

    <Label title="Correct" value={correct} />

    <Label title="Wrong" value={wrong} />

    <Label title="Questions Answered" value={correct + wrong} />

    <Label
      title="Final Score"
      value={`${(correct / (correct + wrong)) * 100}%`}
    />

    <Button isReset type="button" onClick={onClick}>
      Restart Quiz
    </Button>
  </Card>
)
