import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    max-width: 500px;
    background: rgb(22, 16, 87);
    background: linear-gradient(
        128deg,
        rgba(22, 16, 87, 1) 0%,
        rgba(63, 19, 103, 1) 27%
    );
    border-radius: 1rem;
    padding: 2rem;

    & h2 {
        margin-bottom: 2rem;
        color: white;
    }

    & p {
        margin-bottom: 1rem;
        color: white;
    }

    & button {
        border: 2px solid white;
    }
    & button:hover {
        border: 2px solid white;
        background: white;
        color: rgb(22, 16, 87);
    }
`;
