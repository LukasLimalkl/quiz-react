import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 80rem;
    height: 50rem;
    overflow: hidden;
    box-shadow: 1px 4px 5px rgba(163, 178, 219, 1);
    border-radius: 5px;
    @media (min-width: 1400px) {
        width: 120rem;
        height: 80rem;
    }
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
