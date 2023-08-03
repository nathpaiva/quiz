interface InputProps {
  answer: string
  onChange: (answer: string) => void
}
export const Input = ({ answer, onChange }: InputProps) => (
  <label htmlFor={answer}>
    <input
      type="radio"
      id={answer}
      name="answers"
      value={answer}
      onChange={() => {
        onChange(answer)
      }}
    />
    <span dangerouslySetInnerHTML={{ __html: answer }} />
  </label>
)
