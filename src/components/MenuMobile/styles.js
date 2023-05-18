import styled, { css } from 'styled-components';

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
    transform: translateY(5rem);

    background: rgb(255, 255, 255);
    background: linear-gradient(
        188deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(163, 178, 219, 1) 100%
    );
    opacity: 0;
    pointer-events: none;
    transition: 500ms ease-in-out;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: 700ms;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transform: scale(0.5);
        transition: 700ms;
        gap: 2rem;

        > a {
            text-decoration: none;
            font-size: 2.5rem;
        }
    }

    ${({ isVisible }) =>
        isVisible &&
        css`
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);

            > svg {
                transform: rotate(0deg);
            }
            nav {
                transform: scale(1);
            }
        `}
`;
