import React from 'react'
import { View } from 'react-native';
import * as S from './styles';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../styles/colors';

interface SelectedGameCardProps {
    listNumbers: string;
    color: string;
    type: string;
    price: string;
}
export const SelectedGameCard: React.FC<SelectedGameCardProps> = ({ color, listNumbers, price, type }) => {
    return (
        <S.Container color={color}>
            <S.Numbers>{listNumbers}</S.Numbers>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <S.Description>R${price}</S.Description>
                <FontAwesome name="trash-o" size={16} color={colors.gray} />
            </View>
            <S.Name color={color}>{type}</S.Name>
        </S.Container>
    )
}
