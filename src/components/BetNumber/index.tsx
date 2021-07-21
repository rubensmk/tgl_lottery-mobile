import React from 'react'
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface BetNumberProps {
    value: number;
    isFocused: boolean;
    onPress(): void;
}

export const BetNumber: React.FC<BetNumberProps> = ({ value, isFocused, onPress }) => {
    return (
        <S.Container onPress={onPress} isFocused={isFocused}>
            <S.Value>{value + 1}</S.Value>
        </S.Container>
    )
}
