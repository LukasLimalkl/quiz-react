import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    max-width: 500px;
    & h2,
    p {
        margin-bottom: 1rem;
    }

    & img {
        margin-top: 2rem;
    }

    @media (max-width: 720px) {
        width: 300px;
    }
`;
