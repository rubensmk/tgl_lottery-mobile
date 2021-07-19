import React from 'react';
import * as S from './styles';
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
    const { navigate } = useNavigation();
    return (
        <S.Container>
            <Text>Home</Text>
        </S.Container>


    )
}

export default Home;
