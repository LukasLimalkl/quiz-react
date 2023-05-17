import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import * as Styled from './styles';

export function Heading() {
    return (
        <Styled.Container>
            <Logo />
            <NavLinks />
        </Styled.Container>
    );
}
