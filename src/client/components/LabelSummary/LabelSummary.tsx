import React, {
  FC,
} from 'react';

interface Props {
  title: string
  value: number
};

const LabelSummary:FC<Props> = ({ title, value }: Props) => (
  <p>
    <strong>
      {`${title}: `}
    </strong>
    {value}
  </p>
);

export default LabelSummary;
