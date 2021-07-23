import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';
import { GameButton } from '../../components/GameButton';
import { BetNumber } from '../../components/BetNumber';
import api from '../../services/api';
import { GameProps, IFetchGame } from './types';
import { SelectedBetNumber } from '../../components/SelectedBetNumber';
import { GameOptionsButton } from '../../components/GameOptionsButton';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/modules/auth/actions';
import { addToCart } from '../../store/modules/cart/actions';

interface ICartItem {
    id: number;
    choosenNumbers: string;
    gameType: string;
    gamePrice: number;
    gameColor: string;
}

const Bet: React.FC = ({ navigation }: any) => {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    const [games, setGames] = useState<GameProps[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [gameId, setGameId] = useState(0);
    const [color, setColor] = useState('');
    const [limit, setLimit] = useState(0);
    const [range, setRange] = useState(0);
    const [betNumbers, setBetNumbers] = useState<number[]>([]);
    const [selectedGame, setSelectedGame] = useState('');
    const [choosedNumbers, setChoosedNumbers] = useState<number[]>([]);

    const handleSelectGame = useCallback((game: GameProps) => {
        setSelectedGame(game.type);
        setGameId(game.gameId);
        setColor(game.color);
        setPrice(game.price);
        setLimit(game.maxNumber);
        setTitle(game.type.toUpperCase());
        setDescription(game.description);
        setRange(game.range);
        setBetNumbers(Array.from(Array(game.range).keys()));
    }, []);

    const handleSelectNumber = useCallback((selectedNum: number) => {
        const newEntry = selectedNum + 1;
        const numbers = [...choosedNumbers];

        if (numbers.includes(newEntry)) {
            numbers.splice(numbers.indexOf(newEntry), 1);
            setChoosedNumbers(numbers);
        } else if (numbers.length >= limit) {
            Toast.show({
                type: 'info',
                position: 'top',
                text1: 'Limite de números do jogo!  ',
                text2: `Já foram selecionados o número limite do jogo: ${limit}, finalize adicionando ao carrinho. 🛒`,
            });
        } else {
            numbers.push(newEntry);
            setChoosedNumbers(numbers);
        }
    }, [choosedNumbers, limit]);

    const handleClearGame = useCallback(() => {
        setChoosedNumbers([]);
    }, []);

    const handleCompleteGame = useCallback(() => {
        let numbers = [...choosedNumbers];
        const min = 1;

        if (numbers.length === limit) {
            numbers = []
            setChoosedNumbers(numbers);
            for (let i = 0; i < limit; i++) {
                let randomNum = Math.floor(Math.random() * range) + min;
                let check = numbers.includes(randomNum);

                if (check === false) {
                    numbers.push(randomNum);
                    setChoosedNumbers(numbers);
                } else {
                    while (check === true) {
                        randomNum = Math.floor(Math.random() * range) + min;
                        check = numbers.includes(randomNum);
                        if (check === false) {
                            numbers.push(randomNum);
                            setChoosedNumbers(numbers);
                        }
                    }
                }

            }
        }
        if (numbers.length === 0) {
            for (let i = 0; i < limit; i++) {
                let randomNum = Math.floor(Math.random() * range) + min;
                let check = numbers.includes(randomNum);

                if (check === false) {
                    numbers.push(randomNum);
                    setChoosedNumbers(numbers);
                } else {
                    while (check === true) {
                        randomNum = Math.floor(Math.random() * range) + min;
                        check = numbers.includes(randomNum);
                        if (check === false) {
                            numbers.push(randomNum);
                            setChoosedNumbers(numbers);
                        }
                    }
                }
            }
        }
        if (numbers.length > 0) {
            const changedMax = limit - numbers.length;
            for (let i = 0; i < changedMax; i++) {
                let randomNum = Math.floor(Math.random() * range) + min;
                let check = numbers.includes(randomNum);

                if (check === false) {
                    numbers.push(randomNum);
                    setChoosedNumbers(numbers);
                } else {
                    while (check === true) {
                        randomNum = Math.floor(Math.random() * range) + min;
                        check = numbers.includes(randomNum);
                        if (check === false) {
                            numbers.push(randomNum);
                            setChoosedNumbers(numbers);
                        }
                    }
                }
            }
        }

    }, [choosedNumbers, limit, range]);

    const handleAddToCart = useCallback(() => {
        const numbers = [...choosedNumbers];
        const newCartItem = {
            id: gameId,
            choosenNumbers: numbers.sort((a, b) => a - b).toString(),
            gameType: selectedGame,
            gamePrice: price,
            gameColor: color,
        };

        if (numbers.length === limit) {
            dispatch(addToCart(newCartItem))
        } else {
            Toast.show({
                type: 'info',
                position: 'top',
                text1: `Faltando ${limit - numbers.length} ${(limit - numbers.length) === 1 ? 'número' : 'números'} na sua jogada.`,
                text2: `É preciso escolher ${limit} números para finalizar esta jogada.`,
            });
        }
    }, [choosedNumbers, color, gameId, limit, selectedGame, price]);

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
        loadGames();

    }, []);

    return (
        <>
            <S.Container>
                <S.Header>
                    <S.Logo>
                        <S.LogoText>TGL</S.LogoText>
                    </S.Logo>
                    <S.Icons>
                        <MaterialCommunityIcons name="cart-outline" size={28} color={colors.lightGreen} onPress={() => navigation.openDrawer()} />
                        <MaterialCommunityIcons name="logout" size={28} color={colors.lightGray} onPress={() => handleLogOut()} />
                    </S.Icons>
                </S.Header>

                <S.Content>
                    <S.Title>NEW BET FOR {title}</S.Title>
                    <S.Subtitle>Choose a game</S.Subtitle>
                    <S.Filters horizontal showsHorizontalScrollIndicator={false}>
                        {games.map(game => (
                            <GameButton onPress={() => handleSelectGame(game)} key={game.gameId} color={game.color} gameType={game.type} isFocused={game.type === selectedGame} />
                        ))}
                    </S.Filters>
                    {choosedNumbers.length > 0 ?
                        (
                            <>
                                <S.SelectedNumbers>
                                    <S.Numbers data={choosedNumbers} keyExtractor={(item: any) => String(item)} renderItem={({ item }) => (
                                        <SelectedBetNumber value={item} key={item} />
                                    )}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </S.SelectedNumbers>
                                <S.GameOptions>
                                    <GameOptionsButton title="Complete game" onPress={() => handleCompleteGame()} />
                                    <GameOptionsButton title="Clear game" onPress={() => handleClearGame()} />
                                    <GameOptionsButton title="Add to cart" onPress={() => handleAddToCart()} />
                                </S.GameOptions>
                            </>

                        ) : (
                            <>
                                <S.DescriptionTitle>Fill your bet</S.DescriptionTitle>
                                <S.Description>
                                    {description.length === 0 ? 'Chosse a game to fill your bet.' : description}
                                </S.Description>
                            </>
                        )
                    }
                </S.Content>
                <S.BetNumbers>
                    <S.Numbers data={betNumbers} keyExtractor={(item: any) => item} renderItem={({ item }) => (
                        <BetNumber value={item} onPress={() => handleSelectNumber(item)} isFocused={choosedNumbers.includes(item + 1)} />
                    )}
                        numColumns={5}
                    />
                </S.BetNumbers>
            </S.Container>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    )
}

export default Bet;
