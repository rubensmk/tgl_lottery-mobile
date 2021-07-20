import React from 'react'
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface BetNumberProps {
    value: number;
    isFocused: boolean;
}

export const BetNumber: React.FC<BetNumberProps> = ({ value, isFocused }) => {
    return (
        <S.Container isFocused={isFocused}>
            <S.Value>{value}</S.Value>
        </S.Container>
    )
}
