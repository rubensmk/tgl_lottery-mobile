/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as S from "./styles";
import colors from "../../styles/colors";

interface CartCardProps {
  listNumbers: string;
  color: string;
  type: string;
  price: string;
  onPress(): void;
}
export const CartCard: React.FC<CartCardProps> = ({
  color,
  listNumbers,
  price,
  type,
  onPress,
}) => {
  return (
    <S.Container color={color}>
      <S.Numbers>{listNumbers}</S.Numbers>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <S.Description>{price}</S.Description>
        <FontAwesome
          name="trash-o"
          size={16}
          color={colors.gray}
          onPress={onPress}
        />
      </View>
      <S.Name color={color}>{type}</S.Name>
    </S.Container>
  );
};
