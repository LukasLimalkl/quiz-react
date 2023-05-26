import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    max-width: 500px;

    &h2,
    p {
        margin-bottom: 1rem;
    }

    &p {
        color: #8435de;
    }

    .botao {
        margin: 1rem;
        width: 100px;
    }
    @media (max-width: 720px) {
        width: 350px;
        .botao {
            width: 100px;
            font-size: 12px;
            margin: 0.5rem;
        }
    }
`;
