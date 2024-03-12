import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 45vh;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px 0px blue;
  }
`;

export const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
`;

export const Form = styled.form`
  display: flex;
  gap: 2px;
  margin-bottom: 20px;
`;