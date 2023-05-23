import { useContext, useEffect } from 'react';
import { GameOver } from '../components/gameOver';
import { PickCategory } from '../components/pickCategory';
import { Questions } from '../components/questions';
import { Welcome } from '../components/welcome';
import { QuizContext } from '../context/quiz';
import * as Styled from './styles';

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        dispatch({ type: 'REODER_QUESTIONS' });
    }, [dispatch]);

    return (
        <Styled.Container>
            <h1>Quizz de Counter Strike Global Offensive</h1>
            {quizState.gameStage === 'Start' && <Welcome />}
            {quizState.gameStage === 'Category' && <PickCategory />}
            {quizState.gameStage === 'Playing' && <Questions />}
            {quizState.gameStage === 'End' && <GameOver />}
        </Styled.Container>
    );
}

export default App;
