import React, {
  FC,
} from 'react';

interface Props {
  onChange: (event: any) => void
};
const InputText:FC<Props> = ({ onChange }: Props) => (
  <input
    type="text"
    onChange={(event) => {
      onChange(event.target.value);
    }}
  />
);

export default InputText;
