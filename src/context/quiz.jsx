import P from 'prop-types';
import { createContext, useReducer } from 'react';
import questions from '../data/questions';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestions: 0,
};

const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case 'REODER_QUESTIONS': {
            // eslint disable next line
            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                questions: reorderQuestions,
            };
        }
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};

QuizProvider.propTypes = {
    children: P.node.isRequired,
};
