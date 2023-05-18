import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 80rem;
    height: 50rem;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.div`
    width: 100%;
    height: auto;
`;

export const Text = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    background-color: #f7f7f7;

    padding: 1rem;
    p {
        padding-top: 2rem;
    }
`;
