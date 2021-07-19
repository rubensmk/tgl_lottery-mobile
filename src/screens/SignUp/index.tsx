import React from 'react';
import * as S from './styles';
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
    const { navigate } = useNavigation();
    return (
        <S.Container>
            <Text>SignUp</Text>
        </S.Container>


    )
}

export default SignUp;
