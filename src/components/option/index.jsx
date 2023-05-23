import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
/* eslint-disable react/prop-types */
export const Option = ({ option }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div>
            <p>{option}</p>
        </div>
    );
};
/* eslint-enable react/prop-types */
