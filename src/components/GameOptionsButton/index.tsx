/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./styles";

interface GameButtonProps {
  title: string | "Add to cart";
  onPress(): void;
}
export const GameOptionsButton: React.FC<GameButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <S.ButtonContainer title={title} onPress={onPress}>
      {title === "Add to cart" && (
        <MaterialCommunityIcons name="cart-outline" size={16} color="white" />
      )}
      <S.ButtonTitle title={title}>{title}</S.ButtonTitle>
    </S.ButtonContainer>
  );
};
