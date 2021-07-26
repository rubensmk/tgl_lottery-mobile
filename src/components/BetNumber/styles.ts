import styled, { css } from "styled-components/native";

interface ContainerProps {
  gameColor: string;
  isFocused: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;

  border: 0;
  background: #adc0c4;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  margin: 5px 5px;

  ${(props) =>
    props.isFocused &&
    css`
      background: ${props.gameColor};
    `}
`;
export const Value = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
