import React from 'react';
import * as S from './styles';

const SplashScreen: React.FC = () => {

    return (
        <>
            <S.Container>
                <S.TGL>
                    <S.TGA>The{'\n'}Greatest{'\n'}App</S.TGA>
                    <S.For>for</S.For>
                    <S.Lottery>LOTTERY</S.Lottery>
                </S.TGL>
                <S.Prize source={require('../../assets/money.png')} />
                <S.Money1 source={require('../../assets/money2.png')} />
                <S.Money2 source={require('../../assets/money2.png')} />
            </S.Container>
        </>

    )
}

export default SplashScreen;
