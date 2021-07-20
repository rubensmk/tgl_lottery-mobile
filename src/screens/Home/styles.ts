import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
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
    width: 100%;
    padding: 20px 20px;
`;
export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.gray};
`;
export const Subtitle = styled.Text`
    font-size: 18px;
    font-style: italic;
    margin: 10px 0;
    color: ${colors.lightGray};
`;
export const Filters = styled(FlatList as new () => FlatList)`
    height:40px;
`;
export const RecentGamesList = styled.View`
    height: 500px;
`;
export const RecentGames = styled(FlatList as new () => FlatList)`
    height:40px;
    margin: 10px 0px 0px 10px;
`;