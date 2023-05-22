import P from 'prop-types';
import { createContext } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = { name: 'adri amor' };

    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};

QuizProvider.propTypes = {
    children: P.node.isRequired,
};
