import styled from 'styled-components';

export const Container = styled.div`
    background: rgb(81, 16, 143);
    background: linear-gradient(
        128deg,
        rgba(81, 16, 143, 1) 0%,
        rgba(141, 47, 156, 1) 100%
    );
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    opacity: 0.8;
    transition: 700ms;

    &:hover {
        opacity: 1;
    }

    & p {
        margin-bottom: 0;
    }
`;
