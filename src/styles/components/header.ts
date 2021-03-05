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
    position: relative;
    cursor: pointer;
    margin-right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.main};
  }
`;

export const Notification = styled.div`
  position: absolute;
  width: 9px;
  height: 9px;
  background-color: #e8485c;
  right: 50px;
  top: 20px;
  border-radius: 50%;
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

export const Modal = styled.div`
  position: absolute;
  right: 0px;
  top: 85px;
  margin-right: 35px;
  width: 235px;
  height: 260px;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary};

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 29px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent ${({ theme }) => theme.primary};
  }
`;

export const ButtonAction = styled.button`
  color: ${({ theme }) => theme.main};
  font-size: 0.9rem;
  background: ${({ theme }) => theme.primary};
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }

  span {
    margin-left: 15px;
  }

  svg {
    margin-left: 5px;
  }
`;
