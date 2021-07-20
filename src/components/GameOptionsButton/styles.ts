import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';

interface ContainerProps {
    title: string;
}
export const ButtonContainer = styled.TouchableOpacity<ContainerProps>`
    justify-content:center;
    align-items:center;
    flex-direction: row;

    border-width: 2px;
    border-radius:5px;
    border-color: ${colors.lightGreen};
    height:35px;
    width:110px;
    margin-right: 10px;

    ${props => props.title === 'Add to cart' && css`
        background: ${colors.lightGreen};
    `}

`;

export const ButtonTitle = styled.Text<ContainerProps>`
    font-size: 14px;
    font-weight: 700;
    color:${colors.lightGreen};
    margin-left: 3px;

    ${props => props.title === 'Add to cart' && css`
        color: ${colors.white};
    `}
`;
