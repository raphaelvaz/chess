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

    position: relative;
    bottom: 100px;

    @media (max-width: 710px){
        position: relative;
        bottom: 50px;
    }

    border-radius: 10px;
    background-color: #fdbc45;
    color: #fff;

    padding: 10px;
`;

export const Title = styled.strong`
    margin-left: 5px;
    font-size:16px;
`;

export const Content = styled.span`
    margin-top: 10px;
`;