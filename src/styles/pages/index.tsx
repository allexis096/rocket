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
  height: 500px;
  padding: 20px;
`;

export const Divisor = styled.div``;

export const Github = styled.div``;
