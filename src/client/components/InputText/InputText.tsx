import React, {
  FC,
} from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-flow: column;
`;

interface Props {
  answer: string,
  onChange: (event: any) => void
};
const InputText:FC<Props> = ({ answer, onChange }: Props) => (
  <Label htmlFor={answer}>
    Type your response:
    <input
      type="text"
      id={answer}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  </Label>
);

export default InputText;
