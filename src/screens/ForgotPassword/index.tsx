import React from 'react';
import * as S from './styles';
import { styles } from './styles';
import { Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

const ForgotPassword: React.FC = () => {
    const { navigate, goBack } = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <S.Container>
            <S.Logo>
                <S.LogoText>TGL</S.LogoText>
            </S.Logo>
            <S.Title>Reset Password</S.Title>
            <S.Form>

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
                    name="Email"
                    defaultValue=""
                />

                {errors.Email && <Text>This is required.</Text>}
                <S.SendLinkButton onPress={handleSubmit(onSubmit)}>
                    <S.SendLinkText>Send Link</S.SendLinkText>
                    <Feather name="arrow-right" size={35} color={colors.lightGreen} />
                </S.SendLinkButton>
            </S.Form>
            <S.goBackButton onPress={() => goBack()}>
                <Feather name="arrow-left" size={35} color={colors.gray} />
                <S.goBackText>Back</S.goBackText>
            </S.goBackButton>
        </S.Container >
    )
}

export default ForgotPassword;
