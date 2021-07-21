import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import colors from '../../styles/colors';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IUser } from '../../store/modules/auth/types';
import { useWorkletCallback } from 'react-native-reanimated';
import { formatDate } from '../../utils/formatDate';

const Account: React.FC = () => {
    const { navigate } = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const user = useSelector<IState, IUser>(state => state.auth.user);

    const onSubmit = (data: any) => console.log(data);
    return (
        <S.Container>
            <S.Header>
                <S.Logo>
                    <S.LogoText>TGL</S.LogoText>
                </S.Logo>
                <MaterialCommunityIcons name="logout" size={28} color={colors.lightGray} onPress={() => navigate('SignIn')} />
            </S.Header>
            <S.Content>
                <S.Title>MY PROFILE</S.Title>
                <S.Info>Email:{user.email}</S.Info>
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
                                placeholder={user.username}
                            />
                        )}
                        name="name"
                        defaultValue=""
                    />
                    {errors.name && <Text>Name is required.</Text>}
                </S.Form>
                <S.ApplyButton onPress={handleSubmit(onSubmit)}>
                    <S.ApplyButtonText>Apply Changes</S.ApplyButtonText>
                </S.ApplyButton>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <S.Info>Created at: {formatDate(user.created_at)}</S.Info>
                    <S.Info>Last Update: {formatDate(user.updated_at)}</S.Info>
                </View>
                <S.Title>RESET PASSWORD</S.Title>
                <S.ResetButton onPress={() => console.log('reset senha')}>
                    <S.ResetText>Send Email to Reset Password</S.ResetText>
                </S.ResetButton>
            </S.Content>

        </S.Container>


    )
}

export default Account;
