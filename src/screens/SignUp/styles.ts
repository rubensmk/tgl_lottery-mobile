import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
`;
export const Logo = styled.View`
    border-bottom-width: 6px;
    border-bottom-color: ${colors.lightGreen};
    border-radius:5px;
    margin-bottom:46px;
`;
export const LogoText = styled.Text`
    font-size: 44px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.gray};
`;
export const Title = styled.Text`
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.gray};
    margin-bottom: 26px;
`;
export const Form = styled.View`
    background: ${colors.white};
    width: 80%;
    height: 320px;
    border-radius:25px;
`;

export const RegisterButton = styled.TouchableOpacity`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const RegisterText = styled.Text`
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.lightGreen};
    margin-right:10px;
`;
export const goBackButton = styled.TouchableOpacity`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top:38px;
`;
export const goBackText = styled.Text`
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.gray};
    margin-right:10px;
`;
export const Error = styled.View`
    border: 1px solid ${colors.borderGray};
    border-top-width: 0;
    border-bottom-width:0 ;
`;

export const ErrorText = styled.Text`
    font-size: 12px;
    color: red;
    align-self: center;
`;
export const styles = StyleSheet.create({
    firstInput: {
        height: 64,
        borderColor: colors.borderGray,
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ebebeb',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    input: {
        height: 64,
        borderColor: colors.borderGray,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderTopWidth: 0,
        borderBottomColor: '#ebebeb',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingLeft: 10
    }
})