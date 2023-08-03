import Button from '../../components/Button'
import Card from '../../components/Card'
import Label from '../../components/Label'

interface Props {
  correct: number
  wrong: number
  onClick: () => void
}

const Summary = ({ correct, wrong, onClick }: Props) => (
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

export default Summary
