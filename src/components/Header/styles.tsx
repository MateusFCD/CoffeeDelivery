import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 4px;
      padding: 0.5rem;

      border-radius: 6px;

      background: ${(props) => props.theme["purple-100"]};
      color: ${(props) => props.theme["purple-900"]};
      
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 18.2px;
    }

    nav {
      a {
        background: ${(props) => props.theme["yellow-100"]};
        padding: 0.5rem;
        border-radius: 6px;

        display: flex;
        justify-content: center;

        color: ${(props) => props.theme["yellow-900"]};
      }
    }
  }
`;
