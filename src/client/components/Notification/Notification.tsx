import styled from 'styled-components'
import Card from '../Card'

interface MessageProps {
  readonly error: boolean
}

const Message = styled(Card)<MessageProps>`
  align-items: center;
  border: 1px solid ${({ error }) => (error ? 'red' : 'gray')};
  font-size: 1.2rem;
  justify-content: center;
`

interface NotificationProps {
  children?: React.ReactNode | React.ReactNode[] | string
  error?: boolean
}

const Notification = ({ error = false, children }: NotificationProps) => (
  <Message error={error}>{children}</Message>
)

export default Notification
