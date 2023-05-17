import * as Styled from './styles';
export const NavLinks = () => {
    return (
        <Styled.Container>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </Styled.Container>
    );
};