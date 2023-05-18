import P from 'prop-types';
import { IoMenu } from 'react-icons/io5';
import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import * as Styled from './styles';

export function Heading({ setMenuVisible }) {
    return (
        <Styled.Container>
            <Logo />
            <NavLinks />
            <IoMenu onClick={() => setMenuVisible(true)} />
        </Styled.Container>
    );
}

Heading.propTypes = {
    setMenuVisible: P.bool.isRequired,
};
