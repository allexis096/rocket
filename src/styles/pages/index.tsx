import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  h1 {
    margin: 60px 0;
    font-size: 3rem;
    max-width: 350px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.primary};
  height: 420px;
  width: 440px;
  padding: 50px 60px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  a {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.rocket};
    margin: 0.5rem 0 1.5rem;

    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.rocketHover};
    }
  }

  > button {
    background: ${({ theme }) => theme.rocket};
    border-radius: 5px;
    font-weight: 500;
    height: 45px;
    border: 0;
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;

    &:hover {
      background: ${({ theme }) => theme.rocketHover};
    }
  }

  span {
    text-align: center;
    margin: 1rem 0;
    font-size: 0.8rem;
  }
`;

export const Divisor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    width: calc(50% - 25px);
    height: 1px;
    background: ${({ theme }) => theme.button};
  }
`;

export const Github = styled.div`
  display: flex;

  span {
    color: ${({ theme }) => theme.main};
    font-size: 0.8rem;
    white-space: nowrap;
    margin-right: 24px;
    align-self: center;
  }

  button {
    width: 100%;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.main};
    height: 50px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.button};
    transition: background-color 0.2s;

    > svg {
      margin-right: 8px;
      color: ${({ theme }) => theme.rocket};
      transition: color 0.2s ease 0s;
    }

    &:hover {
      background-color: ${({ theme }) => theme.rocket};
      color: ${({ theme }) => theme.white};

      svg {
        color: ${({ theme }) => theme.white};
      }
    }
  }
`;
