import React from 'react';
import * as S from './styles';
import { SafeAreaView, ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { GameButton } from '../../components/GameButton';
import { CompletedGameCard } from '../../components/CompletedGameCard';

const Home: React.FC = () => {
    const { navigate } = useNavigation();
    const data = [
        { id: 1, color: colors.purple, gameType: "Lotofácil" },
        { id: 2, color: colors.green, gameType: "Mega-Sena" },
        { id: 3, color: colors.orange, gameType: "Quina" }
    ]
    const gamesData = [
        { id: 1, color: colors.purple, gameType: "Lotofácil", number: "1,2,3,4,5,6,12,7,8,9" },
        { id: 2, color: colors.green, gameType: "Mega-Sena", number: "1,2,3,4,5,6,12,7,8,9" },
        { id: 3, color: colors.orange, gameType: "Quina", number: "1,2,3,4,5,6,12,7,8,9" }

    ]
    return (
        <S.Container>
            <S.Header>
                <S.Logo>
                    <S.LogoText>TGL</S.LogoText>
                </S.Logo>
                <MaterialCommunityIcons name="logout" size={28} color={colors.lightGray} onPress={() => navigate('SignIn')} />
            </S.Header>

            <S.Content>
                <S.Title>RECENT GAMES</S.Title>
                <S.Subtitle>Filters</S.Subtitle>
                <S.Filters data={data} keyExtractor={(item: any) => String(item.id)} renderItem={({ item }) => (
                    <GameButton color={item.color} gameType={item.gameType} isFocused={false} />
                )}
                    horizontal
                    showsHorizontalScrollIndicator={false}

                />
                <S.RecentGamesList>
                    <S.RecentGames data={gamesData} keyExtractor={(item: any) => String(item.id)} renderItem={({ item }) => (
                        <CompletedGameCard listNumbers={item.number} color={item.color} type={item.gameType} date="10/02/2020" price="2,50" />
                    )}
                    />
                </S.RecentGamesList>
            </S.Content>
        </S.Container>


    )
}

export default Home;
