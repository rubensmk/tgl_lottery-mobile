import React from 'react'
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface GameButtonProps {
    title: string | "Add to cart";
}
export const GameOptionsButton: React.FC<GameButtonProps> = ({ title }) => {
    return (
        <S.ButtonContainer title={title} >
            {title === 'Add to cart' && <MaterialCommunityIcons name="cart-outline" size={16} color="white" />}
            <S.ButtonTitle title={title}>{title}</S.ButtonTitle>
        </S.ButtonContainer>
    )
}
