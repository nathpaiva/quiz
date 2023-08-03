interface LabelProps {
  title: string
  value: number | string
}

export const Label = ({ title, value }: LabelProps) => {
  return (
    <p>
      <strong>{`${title}: `}</strong>
      {value}
    </p>
  )
}
