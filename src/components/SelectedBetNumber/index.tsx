import React from 'react'
import * as S from './styles';



interface SelectedBetNumberProps {
    value: number;
}
export const SelectedBetNumber: React.FC<SelectedBetNumberProps> = ({ value }) => {
    return (
        <S.Container>
            <S.Value>{value}</S.Value>
            <S.Icon name="close" size={12} color="white" />
        </S.Container>
    )
}
