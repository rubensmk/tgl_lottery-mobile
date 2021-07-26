/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import * as S from "./styles";

interface SelectedBetNumberProps {
  value: number;
  gameColor: string;
}
export const SelectedBetNumber: React.FC<SelectedBetNumberProps> = ({
  value,
  gameColor,
}) => {
  return (
    <S.Container gameColor={gameColor}>
      <S.Value>{value}</S.Value>
    </S.Container>
  );
};
