import React, {
  FC,
} from 'react';

interface Props {
  answer: string,
  onChange: (answer: string) => void
};
const Input:FC<Props> = ({ answer, onChange }: Props) => (
  <label
    htmlFor={answer}
    onChange={() => {
      onChange(answer);
    }}
  >
    <input type="radio" id={answer} name="answers" value={answer} />
    <span dangerouslySetInnerHTML={{ __html: answer }} />
  </label>
);

export default Input;
