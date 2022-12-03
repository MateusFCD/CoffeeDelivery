import styled, { ThemeConsumer } from "styled-components";

export const Card = styled.div`
  width: 256px;
  height: 310px;

  background: ${(props) => props.theme["gray-100"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    background: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-900"]};
    border-radius: 100px;
    padding: 4px 8px;
    width: 81px;
    height: 21px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;

    margin-bottom: 20px;
  }

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 8px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme["gray-600"]};
    margin-bottom: 33px;
  }
`;
