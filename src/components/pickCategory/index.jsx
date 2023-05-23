import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import * as Styled from './styles';

export const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    function chooseCategoryAndReorderQuestions(category) {
        dispatch({ type: 'START_GAME', payload: category });

        dispatch({ type: 'REORDER_QUESTIONS' });
    }

    return (
        <Styled.Container>
            <h2>Escolha uma categoria</h2>
            <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
            {quizState.questions.map((question) => (
                <button
                    onClick={() =>
                        chooseCategoryAndReorderQuestions(question.category)
                    }
                    key={question.category}
                >
                    {question.category}
                </button>
            ))}
        </Styled.Container>
    );
};
