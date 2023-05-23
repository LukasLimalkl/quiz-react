import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import * as Styled from './styles';
/* eslint-disable react/prop-types */
export const Option = ({ option }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <Styled.Container>
            <p>{option}</p>
        </Styled.Container>
    );
};
/* eslint-enable react/prop-types */
