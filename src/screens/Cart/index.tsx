import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import colors from '../../styles/colors'
import { SelectedGameCard } from '../../components/SelectedGameCard';


const Cart: React.FC = ({ navigation }: any) => {
    const { navigate } = useNavigation();
    const gamesData = [
        { id: 1, color: colors.purple, gameType: "Lotofácil", number: "1,2,3,4,5,6,12,7,8,9" },
        { id: 2, color: colors.green, gameType: "Mega-Sena", number: "1,2,3,4,5,6,12,7,8,9" },
        { id: 3, color: colors.orange, gameType: "Quina", number: "1,2,3,4,5,6,12,7,8,9" },
        { id: 4, color: colors.orange, gameType: "Quina", number: "1,2,3,4,5,6,12,7,8,9" },
        { id: 5, color: colors.orange, gameType: "Quina", number: "1,2,3,4,5,6,12,7,8,9" },
        { id: 6, color: colors.orange, gameType: "Quina", number: "1,2,3,4,5,6,12,7,8,9" }

    ]
    return (
        <S.Container>
            <S.Header>
                <MaterialCommunityIcons name="cart-outline" size={32} color={colors.lightGreen} />
                <S.Title>CART</S.Title>
            </S.Header>
            <S.SelectedGames>
                {gamesData.map(game => (
                    <SelectedGameCard key={game.id} listNumbers={game.number} color={game.color} type={game.gameType} price="2,50" />
                ))}
            </S.SelectedGames>
            <S.TotalSection>
                <S.TotalText> CART <Text style={{ fontWeight: "normal" }}>TOTAL</Text></S.TotalText>
                <S.TotalPrice>R$ 2,50</S.TotalPrice>
            </S.TotalSection>
            <S.SaveButton>
                <S.SaveButtonText>Save</S.SaveButtonText>
                <Feather name="arrow-right" size={38} color={colors.lightGreen} />
            </S.SaveButton>
        </S.Container>


    )
}

export default Cart;
