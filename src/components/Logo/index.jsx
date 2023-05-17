import LinepixLogo from '../../assets/logo.svg';
import * as Styled from './styles';

export const Logo = () => {
    return (
        <Styled.Container>
            <img src={LinepixLogo} alt="foto" />
        </Styled.Container>
    );
};
