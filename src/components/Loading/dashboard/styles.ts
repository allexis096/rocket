import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 100px;
  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkeletonContent = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 550px;

  padding: 64px;
  margin: 20px;
  border-radius: 5px;

  border: 3px solid ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.primary};

  > span:nth-child(1) {
    position: absolute;
    top: 50px;
  }

  > span:nth-child(2) {
    margin: 150px 0;
  }
`;
