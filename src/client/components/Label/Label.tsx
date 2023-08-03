interface LabelProps {
  title: string
  value: number | string
}

function Label({ title, value }: LabelProps) {
  return (
    <p>
      <strong>{`${title}: `}</strong>
      {value}
    </p>
  )
}

export default Label
