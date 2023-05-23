import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import * as Styled from './styles';
/* eslint-disable react/prop-types */
export const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <Styled.Container onClick={() => selectOption()}>
            <p>{option}</p>
        </Styled.Container>
    );
};
/* eslint-enable react/prop-types */
