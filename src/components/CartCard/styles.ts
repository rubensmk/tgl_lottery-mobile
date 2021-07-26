import styled, { css } from "styled-components/native";
import colors from "../../styles/colors";

interface ContainerProps {
  color: string;
}
export const Container = styled.View<ContainerProps>`
  border-left-width: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding-left: 10px;
  margin-bottom: 10px;

  height: 70px;
  width: 240px;
  justify-content: center;
  ${(props) =>
    props.color &&
    css`
      border-left-color: ${props.color};
    `}
`;
export const Numbers = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${colors.gray};
`;

export const Description = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
`;

export const Name = styled.Text<ContainerProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.orange};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
