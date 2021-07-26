/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./styles";

interface GameButtonProps {
  color: string;
  gameType: string;
  isFocused: boolean;
  onPress(): void;
}
export const GameButton: React.FC<GameButtonProps> = ({
  color,
  gameType,
  isFocused,
  onPress,
}) => {
  return (
    <S.ButtonContainer onPress={onPress} isFocused={isFocused} color={color}>
      <S.ButtonTitle isFocused={isFocused} color={color}>
        {gameType}
      </S.ButtonTitle>
      {isFocused && (
        <MaterialCommunityIcons name="close" size={14} color="white" />
      )}
    </S.ButtonContainer>
  );
};
