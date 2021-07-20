import React from 'react';
import * as S from './styles';
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Bet: React.FC = () => {
    const { navigate } = useNavigation();
    return (
        <S.Container>
            <Text>Bet</Text>
        </S.Container>


    )
}

export default Bet;
