import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { DrawerContentScrollView } from '@react-navigation/drawer';

export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    height: 80px;
    width:100%;
    padding: 0 20px;
`;


export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
    margin-left: 12px;
    color: ${colors.gray};
`;

export const SelectedGames = styled(DrawerContentScrollView)`
    max-height: 400px;
`;

export const TotalSection = styled.View`
    flex-direction: row;
    padding:10px 20px;
    width: 100%;
    justify-content:space-between;
`;
export const TotalText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.gray};
`;
export const TotalPrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.gray};
`;
export const SaveButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content:center;
    align-items: center;

    background: ${colors.borderGray};
    width:100%;
    height :120px ;
`;
export const SaveButtonText = styled.Text`
    font-size:38px;
    font-weight: bold;
    font-style: italic;
    color: ${colors.lightGreen};
    margin-right: 8px;
`;