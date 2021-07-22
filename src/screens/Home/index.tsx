import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { GameButton } from '../../components/GameButton';
import { CompletedGameCard } from '../../components/CompletedGameCard';
import { CompletedGameProps, GameProps, IFetchGame } from '../Bet/types';
import api from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { IUser } from '../../store/modules/auth/types';
import { formatDate } from '../../utils/formatDate';
import { logOut } from '../../store/modules/auth/actions';

const Home: React.FC = () => {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [games, setGames] = useState<GameProps[]>([]);
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [completedCart, setCompletedCart] = useState<CompletedGameProps[]>([]);
    const user = useSelector<IState, IUser>(state => state.auth.user);

    const handleSelectFilter = async (type: number) => {
        setSelectedFilter(prevState => (prevState === type ? 0 : type));
    };

    const handleLogOut = async () => {
        dispatch(logOut());
        navigate('SignIn')
    }
    useEffect(() => {
        async function loadGames() {
            const response = await api.get('games');
            const data = response.data.data.map((item: IFetchGame) => ({
                gameId: item.id,
                type: item.type,
                description: item.description,
                range: item.range,
                price: item.price,
                maxNumber: item['max-number'],
                color: item.color,
                minCartValue: item['min-cart-value'],
            }));
            setGames(data);
        }
        async function loadCompletedGames() {

            const response = await api.get(`/bets/${user.id}/${page}`)
            const allBetsByUser = response.data;
            allBetsByUser.data.map((item: CompletedGameProps) => setCompletedCart(prevState => [...prevState, item]))
        }
        loadGames();
        loadCompletedGames();
    }, []);
    return (
        <S.Container>
            <S.Header>
                <S.Logo>
                    <S.LogoText>TGL</S.LogoText>
                </S.Logo>
                <MaterialCommunityIcons name="logout" size={28} color={colors.lightGray} onPress={() => handleLogOut()} />
            </S.Header>

            <S.Content>
                <S.Title>RECENT GAMES</S.Title>
                <S.Subtitle>Filters</S.Subtitle>
                <S.Filters>
                    {games.map(game => (
                        <GameButton onPress={() => handleSelectFilter(game.gameId)} key={game.gameId} color={game.color} gameType={game.type} isFocused={game.gameId === selectedFilter} />
                    ))}
                </S.Filters>
                <S.RecentGamesList>
                    <S.RecentGames data={completedCart} keyExtractor={(item: any) => String(item.id)} renderItem={({ item }) => (
                        <CompletedGameCard
                            listNumbers={item.choosenNumber}
                            color={item.gameColor}
                            type={item.gameType}
                            date={item.created_at}
                            price={(item.gamePrice)}
                        />
                    )}
                        showsVerticalScrollIndicator={false}
                    />
                </S.RecentGamesList>
            </S.Content>
        </S.Container>


    )
}

export default Home;
