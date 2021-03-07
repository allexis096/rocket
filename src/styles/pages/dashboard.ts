import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 50px;
`;

export const CardOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${({ theme }) => theme.mainHover};
    font-size: 0.9rem;
  }

  div {
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    p {
      color: ${({ theme }) => theme.main};
      font-size: 0.9rem;
      max-width: 350px;
      margin-left: 40px;
      line-height: 1.5rem;
    }
  }
`;

export const CardTwo = styled.div`
  margin-top: 60px;
  background: linear-gradient(to left, rgb(45, 38, 74), rgb(32, 32, 36));
  border-radius: 5px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.background};
  cursor: pointer;

  main {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.5rem;
    }

    span {
      margin-top: 10px;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.mainHover};
    }
  }

  div {
    font-weight: 600;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }

  transition: border 0.2s;
  &:hover {
    border: 2px solid ${({ theme }) => theme.rocket};
  }
`;
