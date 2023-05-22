import { useContext } from 'react';
import { Questions } from '../components/questions';
import { Welcome } from '../components/welcome';
import { QuizContext } from '../context/quiz';
import * as Styled from './styles';

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <Styled.Container>
            <h1>Quizz de League of Lengends</h1>
            {quizState.gameStage === 'Start' && <Welcome />}
            {quizState.gameStage === 'Playing' && <Questions />}
        </Styled.Container>
    );
}

export default App;
