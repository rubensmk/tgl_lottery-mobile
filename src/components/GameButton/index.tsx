import React from 'react'
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface GameButtonProps {
    color: string;
    gameType: string;
    isFocused: boolean;
}
export const GameButton: React.FC<GameButtonProps> = ({ color, gameType, isFocused }) => {
    return (
        <S.ButtonContainer isFocused={isFocused} color={color}>
            <S.ButtonTitle isFocused={isFocused} color={color}>{gameType}</S.ButtonTitle>
            {isFocused && <MaterialCommunityIcons name="close" size={14} color="white" />}
        </S.ButtonContainer>
    )
}
