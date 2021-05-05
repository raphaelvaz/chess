import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;

    div{
        display:flex;
        justify-content: flex-start;
        align-items: center;
    }

    width: 350px;

    position: absolute;
    right:10px;
    top:10px;
    padding: 10px;
    overflow: hidden;

    border-radius: 10px;
    background-color: #fdbc45;
    color: #fff;
`;

export const Title = styled.strong`
    margin-left: 5px;
    font-size:16px;
`;

export const Content = styled.span`
    margin-top: 10px;
`;