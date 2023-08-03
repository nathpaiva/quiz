import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  flex-flow: column;
`

interface InputTextProps {
  answer: string
  onChange: (event: any) => void
}
const InputText = ({ answer, onChange }: InputTextProps) => (
  <Label htmlFor={answer}>
    Type your response:
    <input
      type="text"
      id={answer}
      onChange={(event) => {
        onChange((event.target as any).value)
      }}
    />
  </Label>
)

export default InputText
