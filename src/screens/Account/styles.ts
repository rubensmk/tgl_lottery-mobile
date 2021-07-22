import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
`;
export const Header = styled.View`
    background-color: ${colors.white};
    width: 100%;
    height: 78px;
    padding: 0 10px;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
`;
export const Logo = styled.View`
    align-items:center;
    border-bottom-width: 6px;
    border-bottom-color: ${colors.lightGreen};
    border-radius:5px;
    width: 62px;
    `;
export const LogoText = styled.Text`
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.gray};
`;

export const Content = styled.View`
    flex:1;
    width: 100%;
    padding: 20px 20px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.gray};
    margin-top: 20px;
`;
export const Form = styled.View`
    width: 80%;
`;

export const ApplyButton = styled.TouchableOpacity`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const ApplyButtonText = styled.Text`
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.lightGreen};
`;
export const Info = styled.Text`
    font-size: 14px;
    font-style: italic;
    color: ${colors.lightGray};
`;
export const ResetButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const ResetText = styled.Text`
    text-align: center;
    font-size: 28px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.lightGreen};
`;
export const ErrorText = styled.Text`
    font-size: 15px;
    color: red;
    align-self: center;
`;
export const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: colors.white,
        borderColor: colors.borderGray,
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingLeft: 10,
        marginTop: 12
    }
})