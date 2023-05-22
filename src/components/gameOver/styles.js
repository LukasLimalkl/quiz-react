import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    & h2,
    p {
        margin-bottom: 1rem;
    }

    & img {
        margin: 2rem;
        height: 200px;
    }
`;
