import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ContainerProps {
  gameColor: string;
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;

  border: 0;

  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin: 5px 5px;

  ${(props) =>
    props.gameColor &&
    css`
      background: ${props.gameColor};
    `}
`;
export const Value = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const Icon = styled(MaterialCommunityIcons)`
  position: absolute;
  top: 3px;
  right: 10px;
`;
