import React from 'react';
import * as S from './styles';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

interface SignInFormData {
    email: string;
    password: string;
}
const SignIn: React.FC = () => {
    const { navigate } = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>();


    const onSubmit = async (data: SignInFormData) => {
        console.log(data);
        navigate('Dashboard')
    };
    return (
        <S.Container>
            <S.Logo>
                <S.LogoText>TGL</S.LogoText>
            </S.Logo>
            <S.Title>Authentication</S.Title>
            <S.Form>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.firstInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Email"
                        />
                    )}
                    name="email"
                    defaultValue=""
                />
                {errors.email && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Password"
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                <S.ForgotPasswordButton onPress={() => navigate('ForgotPassword')}>
                    <S.ForgotPasswordText>I forgot my password</S.ForgotPasswordText>
                </S.ForgotPasswordButton>
                <S.LogInButton onPress={handleSubmit(onSubmit)}>
                    <S.LogInText>Log In</S.LogInText>
                    <Feather name="arrow-right" size={35} color={colors.lightGreen} />
                </S.LogInButton>
            </S.Form>
            <S.SignUpButton onPress={() => navigate('SignUp')}>
                <S.SignUpText>Sign Up</S.SignUpText>
                <Feather name="arrow-right" size={35} color={colors.gray} />
            </S.SignUpButton>
            <S.Footer>Copyright 2020 Luby Software</S.Footer>
        </S.Container >
    )
}

export default SignIn;
