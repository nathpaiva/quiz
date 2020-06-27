import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.06), 0 16px 24px rgba(0, 0, 0, 0.06), 0 24px 32px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-flow: column;
  min-height: 300px;
  justify-content: space-between;
  margin: 50px 0;
  max-width: 500px;
  min-width: 500px;
  padding: 20px;

  h3 {
    font-size: 1.125rem;
  }

  p, strong, label {
    font-size: 0.875rem;
  }

  ul {
    margin: 10px 0;

    li {
      &:not(:first-child) {
        margin-top: 10px;
      }

      label {
        display: block;
        cursor: pointer;
        padding: 5px 0;

        > input {
          margin-right: 5px;
        }
      }
    }
  }

  input[type="text"] {
    padding: 7px;
    margin: 0;
    border-radius: 2px;
    border: 1px solid #ccc;
    font-size: .875rem;
  }
`;

export default Card;
