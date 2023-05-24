import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import csgo from '../../img/csgo.svg';
import * as Styled from './styles';

export const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <Styled.Container>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>
                Iniciar
            </button>
            <img src={csgo} alt="imagem csgo" />
        </Styled.Container>
    );
};
