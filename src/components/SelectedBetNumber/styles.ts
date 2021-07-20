import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity` 
    align-items:center;
    justify-content: center;

    border: 0;
    background: ${colors.orange};
    border-radius: 20px;
    width: 40px;
    height: 40px;
    margin: 5px 5px;

`;
export const Value = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;

export const Icon = styled(MaterialCommunityIcons)`
    position: absolute;
    top:3px;
    right:10px;
`;