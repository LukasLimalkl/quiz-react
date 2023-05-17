import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #dddddd;

    @media (min-width: 1400px) {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
    }
`;
