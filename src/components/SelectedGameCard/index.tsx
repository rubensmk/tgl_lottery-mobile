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
    onPress(): void;
}
export const SelectedGameCard: React.FC<SelectedGameCardProps> = ({ color, listNumbers, price, type, onPress }) => {
    return (
        <S.Container color={color}>
            <S.Numbers>{listNumbers}</S.Numbers>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <S.Description>{price}</S.Description>
                <FontAwesome name="trash-o" size={16} color={colors.gray} onPress={onPress} />
            </View>
            <S.Name color={color}>{type}</S.Name>
        </S.Container>
    )
}
