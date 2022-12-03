import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;

  padding: 5.875rem 0;
`;

export const Titles = styled.div`
  width: 36.75rem;
  height: 7.75rem;

  margin-right: 3.5rem;

  h1 {
    font-family: "Baloo 2";
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["gray-900"]};
    padding-bottom: 1rem;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    font-stretch: 100;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 4.125rem;
  }
`;

export const IconsSubTitles = styled.div`
  display: flex;
  width: 567px;
  height: 84px;
  gap: 2.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;
`;

export const IconCart = styled.span`
  align-items: center;
  display: flex;

  gap: 0.5rem;

  svg {
    background: ${(props) => props.theme["yellow-900"]};
    color: ${(props) => props.theme["white"]};

    padding: 0.5rem;
    border-radius: 100%;
  }
`;

export const IconTimer = styled.span`
  align-items: center;
  display: flex;

  gap: 0.5rem;

  svg {
    background: ${(props) => props.theme["yellow-400"]};
    color: ${(props) => props.theme["white"]};

    padding: 0.5rem;
    border-radius: 100%;
  }
`;

export const IconPackage = styled.span`
  align-items: center;
  display: flex;

  gap: 0.5rem;

  svg {
    background: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["white"]};

    padding: 0.5rem;
    border-radius: 100%;
  }
`;

export const IconCoffee = styled.span`
  align-items: center;
  display: flex;

  gap: 0.5rem;

  svg {
    background: ${(props) => props.theme["purple-400"]};
    color: ${(props) => props.theme["white"]};

    padding: 0.5rem;
    border-radius: 100%;
  }
`;

export const CoffeesContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 1.5rem;

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }
`;
