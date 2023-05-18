import equipImg from '../../assets/equipe.jpg';
import * as Styled from './styles';

export const FirstCard = () => {
    return (
        <Styled.Container>
            <Styled.Text>
                <h1>Somos a line pix asokasoakosasoaksa</h1>
                <p>
                    aisjiasjiajsiajsiakimcickmvcioj jidmnisjdm jsidsidjnsauidh
                    as
                </p>
            </Styled.Text>
            <Styled.Image>
                <img
                    src={equipImg}
                    alt="Foto da equipe LinePix"
                    style={{ height: '100%', width: '100%' }}
                />
            </Styled.Image>
        </Styled.Container>
    );
};
