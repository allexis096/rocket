import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:nth-child(1) {
    margin-bottom: 10px;
  }

  > svg {
    position: absolute;
    top: 15px;
    left: 12px;
  }

  .eye-password {
    left: unset;
    right: 15px;
    color: ${props => props.theme.primary};
    transition: color 0.2s ease 0s;
    cursor: pointer;
  }

  input {
    background-color: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.background};
    font-size: 16px;
    color: ${props => props.theme.main};
    padding: 0 1em 0 2.65em;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme.rocket};
    }
  }
`;
