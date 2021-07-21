import React, { useCallback } from 'react';
import * as S from './styles';
import { styles } from './styles';
import { Text, TextInput } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import api from '../../services/api';
import Toast from 'react-native-toast-message';

interface SignUpFormData {
    register_name: string;
    register_email: string;
    register_password: string;
}
const SignUp: React.FC = () => {
    const { navigate, goBack } = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = useCallback(
        async (data: SignUpFormData) => {

            const userData = {
                username: data.register_name,
                email: data.register_email,
                password: data.register_password,
                password_confirmation: data.register_password,
            };

            try {
                await api.post('users', userData);
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Cadastro finalizado!',
                    text2: 'Seu cadastro foi realizado com sucesso. 👋',
                    onShow: () => { navigate('SignIn') },
                });

            } catch (err) {
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Erro',
                    text2: 'Occoreu um erro no cadastro, tente novamente.'
                });
            }
        },
        [Toast],
    );
    return (
        <>
            <S.Container>
                <S.Logo>
                    <S.LogoText>TGL</S.LogoText>
                </S.Logo>
                <S.Title>Registration</S.Title>
                <S.Form>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.firstInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Name"
                            />
                        )}
                        name="register_name"
                        defaultValue=""
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Email"
                            />
                        )}
                        name="register_email"
                        defaultValue=""
                    />
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
                        name="register_password"
                        defaultValue=""
                    />
                    {errors.Email && <Text>This is required.</Text>}
                    <S.RegisterButton onPress={handleSubmit(handleSignUp)}>
                        <S.RegisterText>Register</S.RegisterText>
                        <Feather name="arrow-right" size={35} color={colors.lightGreen} />
                    </S.RegisterButton>
                </S.Form>
                <S.goBackButton onPress={() => goBack()}>
                    <Feather name="arrow-left" size={35} color={colors.gray} />
                    <S.goBackText>Back</S.goBackText>
                </S.goBackButton>
            </S.Container >
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    )
}

export default SignUp;
