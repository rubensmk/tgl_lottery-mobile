import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex:1;
    display:flex;
    justify-content:center;
    align-items: center;
`;

export const Money1 = styled.Image`
    position:absolute;
    left:20px;
    top: 160px;
    width: 64px;
    height:64px;
`;

export const Money2 = styled.Image`
    position:absolute;
    right:20px;
    top:280px;
    width: 62px;
    height:62px;
`;

export const Prize = styled.Image`
    width: 84px;
    height:84px;
`;
export const TGL = styled.View`
    justify-content: center;
    align-items: center;

`;
export const TGA = styled.Text`
    font-size: 45px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.gray};
    text-align: center;
`;
export const For = styled.Text`
    background: ${colors.lightGreen};
    width: 110px;
    font-size:15px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.white};
    border-radius: 55px;
    text-align: center;
    margin: 10px 0;
    padding: 5px 0;
`;
export const Lottery = styled.Text`
    font-size: 58px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.gray};
`;