import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 80rem;
    height: 50rem;
    border: 1px solid #ccc;
`;

export const Image = styled.div`
    width: 100%;
    height: auto;
    /* object-fit: cover; */
    padding: 1rem;
`;

export const Text = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    padding: 1rem;
    p {
        padding-top: 2rem;
    }
`;
