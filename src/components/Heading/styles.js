import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #dddddd;
    background-color: white;

    @media (min-width: 1400px) {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
    }
    @media (min-width: 900px) {
        &:last-child {
            display: none;
            opacity: 0;
        }
    }

    .mobile {
        display: none;
    }
    @media (max-width: 900px) {
        .mobile {
            display: initial;
        }
    }
`;
