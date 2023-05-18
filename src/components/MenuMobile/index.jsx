import P from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import * as Styled from './styles';

export const MenuMobile = ({ menuVisible, setMenuVisible }) => {
    return (
        <Styled.Container isVisible={menuVisible}>
            <IoCloseOutline size={45} onClick={() => setMenuVisible(false)} />
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Serviços</a>
                <a href="#">Contato</a>
            </nav>
        </Styled.Container>
    );
};

MenuMobile.propTypes = {
    menuVisible: P.bool.isRequired,
    setMenuVisible: P.bool.isRequired,
};
