import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import { Option } from '../option';
import * as Styled from './styles';

export const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestions];

    return (
        <Styled.Container>
            <p>
                Pergunta {quizState.currentQuestions + 1} de
                {' ' + quizState.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div className="Options">
                {currentQuestion.options.map((opt) => (
                    <Option option={opt} key={opt} />
                ))}
            </div>
            <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>
                Continuar
            </button>
        </Styled.Container>
    );
};
