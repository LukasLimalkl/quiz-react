import React from 'react';
import ReactDOM from 'react-dom/client';
import { QuizProvider } from './context/quiz.jsx';
import { GlobalStyles } from './styles/globalStyles.js';
import App from './templates/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles />
        <QuizProvider>
            <App />
        </QuizProvider>
    </React.StrictMode>,
);
