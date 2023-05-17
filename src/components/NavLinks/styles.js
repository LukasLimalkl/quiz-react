import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    justify-content: flex-end;
    a {
        text-decoration: none;
        color: #2b62f8;
        font-size: 1.8rem;
        font-weight: 540;
        letter-spacing: 0.5px;

        &:hover {
            color: #2b6aaa;
        }
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    li {
        padding-left: 30px;
        &:nth-child(4) {
            padding-right: 30px;
        }
    }
`;
