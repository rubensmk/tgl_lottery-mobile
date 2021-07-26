import styled, { css } from "styled-components/native";
import colors from "../../styles/colors";

interface ContainerProps {
  color: string;
  isFocused: boolean;
}
export const ButtonContainer = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-width: 2px;
  border-radius: 50px;
  height: 30px;
  width: 110px;
  margin-right: 10px;

  ${(props) =>
    props.color &&
    css`
      border-color: ${props.color};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      background: ${props.color};
    `}
`;

export const ButtonTitle = styled.Text<ContainerProps>`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${colors.white};
    `}
`;
