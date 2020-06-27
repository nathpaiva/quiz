import styled from 'styled-components';

interface ButtonProps {
  readonly isReset: boolean;
};

const Button = styled.button<ButtonProps>`
  background-color:${({ isReset }) => (isReset ? '#333333' : '#2C7FB8')} ;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;

  &:disabled {
    cursor: default;
    opacity: .5;
  }
`;

export default Button;
