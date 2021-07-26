/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styles";

interface BetNumberProps {
  value: number;
  isFocused: boolean;
  onPress(): void;
  gameColor: string;
}

export const BetNumber: React.FC<BetNumberProps> = ({
  value,
  isFocused,
  onPress,
  gameColor,
}) => {
  return (
    <S.Container onPress={onPress} isFocused={isFocused} gameColor={gameColor}>
      <S.Value>{value + 1}</S.Value>
    </S.Container>
  );
};
