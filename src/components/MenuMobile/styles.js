import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(255, 255, 255);
    background: linear-gradient(
        188deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(163, 178, 219, 1) 100%
    );

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;

        > a {
            text-decoration: none;
            font-size: 2.5rem;
        }
    }
`;
