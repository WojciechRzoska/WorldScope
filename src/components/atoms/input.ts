import styled from 'styled-components';

export const Input = styled.input`
  padding: 1em 2em;
  width: 90%;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  &:focus {
    outline: none;
  }
`;
