import { Welcome } from '../components/welcome';
import * as Styled from './styles';

function App() {
    return (
        <Styled.Container>
            <h1>Quizz de League of Lengends</h1>
            <Welcome />
        </Styled.Container>
    );
}

export default App;
