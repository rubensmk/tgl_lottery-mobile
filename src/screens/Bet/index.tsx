import React, { useState } from 'react';
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';
import { GameButton } from '../../components/GameButton';
import { BetNumber } from '../../components/BetNumber';

const Bet: React.FC = ({ navigation }: any) => {
    const { navigate } = useNavigation();
    const [toggleCart, setToggleCart] = useState(false);
    const data = [
        { id: 1, color: colors.purple, gameType: "Lotofácil" },
        { id: 2, color: colors.green, gameType: "Mega-Sena" },
        { id: 3, color: colors.orange, gameType: "Quina" }
    ]
    const numbersData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    const selectedNumbers = [1, 2, 4, 12, 21]

    return (

        <S.Container>
            <S.Header>
                <S.Logo>
                    <S.LogoText>TGL</S.LogoText>
                </S.Logo>
                <S.Icons>
                    <MaterialCommunityIcons name="cart-outline" size={28} color={colors.lightGreen} onPress={() => navigation.openDrawer()} />
                    <MaterialCommunityIcons name="logout" size={28} color={colors.lightGray} onPress={() => navigate('SignIn')} />
                </S.Icons>
            </S.Header>

            <S.Content>
                <S.Title>NEW BET FOR LOTOFÁCIL</S.Title>
                <S.Subtitle>Choose a game</S.Subtitle>
                <S.Filters data={data} keyExtractor={(item: any) => String(item.id)} renderItem={({ item }) => (
                    <GameButton color={item.color} gameType={item.gameType} isFocused={false} />
                )}
                    horizontal
                    showsHorizontalScrollIndicator={false}

                />
                <S.DescriptionTitle>Fill your bet</S.DescriptionTitle>
                <S.Description>
                    Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
                </S.Description>
                {/* <S.SelectedNumbers>
                    <S.Numbers data={selectedNumbers} keyExtractor={(item: any) => item} renderItem={({ item }) => (
                        <SelectedBetNumber value={item} />
                    )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </S.SelectedNumbers>
                <S.GameOptions>
                    <GameOptionsButton title="Complete game" />
                    <GameOptionsButton title="Clear game" />
                    <GameOptionsButton title="Add to cart" />
                </S.GameOptions> */}
            </S.Content>
            <S.BetNumbers>
                <S.Numbers data={numbersData} keyExtractor={(item: any) => item} renderItem={({ item }) => (
                    <BetNumber value={item} isFocused={false} />
                )}
                    numColumns={5}
                />
            </S.BetNumbers>
        </S.Container>

    )
}

export default Bet;
