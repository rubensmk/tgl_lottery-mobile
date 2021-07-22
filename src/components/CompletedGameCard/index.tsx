import React from 'react'
import * as S from './styles';


interface CompletedGameCardProps {
    listNumbers: string;
    color: string;
    type: string;
    price: number;
    date: string;
}
export const CompletedGameCard: React.FC<CompletedGameCardProps> = ({ color, listNumbers, date, price, type }) => {
    return (
        <S.Container color={color}>
            <S.Numbers>{listNumbers}</S.Numbers>
            <S.Description>{date}- (R$ {price})</S.Description>
            <S.Name color={color}>{type}</S.Name>
        </S.Container>
    )
}
