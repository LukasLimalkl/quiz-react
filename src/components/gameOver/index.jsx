import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Fallen from '../../img/badFallen.svg';
import * as Styled from './styles';

export const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <Styled.Container>
            <h2>Fim de jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>
                Você acertou {quizState.score} de {quizState.questions.length}{' '}
                perguntas.
            </p>
            <img src={Fallen} alt="fim do quiz" />{' '}
            <button onClick={() => dispatch({ type: 'NEW_GAME' })}>
                Reiniciar
            </button>
        </Styled.Container>
    );
};
