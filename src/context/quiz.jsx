import P from 'prop-types';
import { createContext, useReducer } from 'react';
import questions from '../data/questions_complete';

const STAGES = ['Start', 'Category', 'Playing', 'End'];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestions: 0,
    score: 0,
    answerSelected: false,
    help: false,
    optionToHide: null,
};

const quizReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case 'START_GAME': {
            let quizQuestions = null;

            state.questions.forEach((question) => {
                if (question.category === action.payload) {
                    quizQuestions = question.questions;
                }
            });

            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2],
            };
        }
        case 'REODER_QUESTIONS': {
            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                questions: reorderQuestions,
            };
        }

        case 'CHANGE_QUESTION': {
            const nextQuestion = state.currentQuestions + 1;
            let endGame = false;

            if (!questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestions: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };
        }

        case 'NEW_GAME':
            return initialState;

        case 'CHECK_ANSWER': {
            if (state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };
        }
        case 'SHOW_TIP': {
            return {
                ...state,
                help: 'tip',
            };
        }

        case 'REMOVE_OPTION': {
            const questionWithoutOption =
                state.questions[state.currentQuestion];

            console.log(state.currentQuestion);

            console.log(questionWithoutOption);

            let repeat = true;
            let optionToHide;

            questionWithoutOption.options.forEach((option) => {
                if (option !== questionWithoutOption.answer && repeat) {
                    optionToHide = option;
                    repeat = false;
                }
            });

            return {
                ...state,
                optionToHide,
                help: true,
            };
        }
        default:
            return state;
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
