import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import questions from '../../img/questions.svg';
import * as Styled from './styles';

export const Welcome = () => {
    const quizState = useContext(QuizContext);

    console.log(quizState);
    return (
        <Styled.Container>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button>Iniciar</button>
            <img src={questions} alt="quiz" />
        </Styled.Container>
    );
};
