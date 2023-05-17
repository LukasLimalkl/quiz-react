import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    justify-content: flex-end;
    a {
        text-decoration: none;
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
