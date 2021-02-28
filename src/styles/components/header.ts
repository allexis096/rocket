import styled, { css } from 'styled-components';

type SelectedButtonsProps = {
  selected: string;
};

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 72px;
`;

export const SelectedButton = styled.a<SelectedButtonsProps>`
  font-size: 0.9rem;
  margin-right: 25px;
  color: ${({ theme }) => theme.main};
  opacity: 0.8;
  cursor: pointer;

  &:first-child {
    margin-left: 25px;
  }

  ${props =>
    props.selected === props['aria-label']
      ? css`
          font-weight: 700;
          opacity: 1;
          border-bottom: 1px solid ${({ theme }) => theme.rocket};
          padding-bottom: 25px;
        `
      : ''}
`;

export const NavGroup = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;

  span {
    cursor: pointer;
    font-weight: bold;
  }

  img {
    cursor: pointer;
    margin-right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.main};
  }
`;

export const Buttons = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;

  svg {
    color: ${({ theme }) => theme.main};
  }

  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  &:hover {
    background: ${({ theme }) => theme.background};

    svg {
      color: ${({ theme }) => theme.main};
    }
  }
`;
