import Fallen from '../../img/badFallen.svg';
import * as Styled from './styles';

export const GameOver = () => {
    return (
        <Styled.Container>
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: </p>
            <p>Você acertou y de z perguntas</p>
            <img src={Fallen} alt="fim do quiz" />
            <button>Reiniciar</button>
        </Styled.Container>
    );
};
