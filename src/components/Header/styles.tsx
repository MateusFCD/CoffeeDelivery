import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 6.5rem;
  width: 100%;

  background: ${(props) => props.theme.colors["base-background"]};

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${(props) => props.theme.textSizes["text-regular-s"]};

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${theme.colors["brand-purple"]};
      }
    `}
`;
