import styled from 'styled-components'


export const Container = styled.div`
    min-width: 400px;
    width: min(50vw, 500px);
    margin-bottom: 20px;
    border-radius: 5px;

    background-color: var(--dark-background-color-aside);
    color: var(--dark-text-color);
    
`;
export const Tabs = styled.div`
    width: 100%;
    height: 85px;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius: 5px;

    div:first-of-type{
        background-color:var(--dark-background-color-aside);
    }
`;

export const Tab = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    border-radius: 5px;
    margin: 1px;

    background-color: var(--dark-background-color-sidebar);

    svg{
        margin-bottom: 8px;
    }
`;

export const Plays = styled.div`

    width: 97%;
    height: 140px;
    margin: 5px auto;

    border-radius: 5px;
    padding: 10px;

    background-color:var(--dark-background-color-sidebar);
    
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;

    overflow:auto;
    overflow-y:scroll;

    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px #272321;
        -webkit-box-shadow: inset 0 0 6px #272321;
        border-radius: 10px;
        background-color: #272321;
    }

    &::-webkit-scrollbar{
        width: 7px;
        border-radius: 10px;
        background-color: #272321;
    }
    &::-webkit-scrollbar-thumb{
        visibility:hidden;
        border-radius: 10px;
        box-shadow: inset 0 0 6px #272321;
        -webkit-box-shadow: inset 0 0 6px hsl(0, 0.6%, 47.3%);
        background-color: hsl(0, 0.6%, 47.3%);
        }

    &:hover{
        &::-webkit-scrollbar-thumb{
            visibility:visible;    
        }   
    }

    ul{
        list-style-type: none;
    }

    @media (max-width: 970px){
        height:20vh;
    }
`;

export const TaskBar = styled.div`
    width: 97%;
    height: 40px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: var(--dark-background-color-aside);

    button{
        width: 100%;
        height: 35px;
        display:flex;
        align-items:center;
        justify-content:center;

        border-radius: 5px;
        border:none;

        margin-right: 5px;

        font-weight: bold;

        svg{
            margin-right: 3px;
        }

        background-color: var(--dark-background-color-aside-hover);
        color: var(--dark-text-color);

        outline: none;
        cursor: pointer;

        transition: background-color 0.2s;

        &:hover{
            background-color: #1b1919;
        }
    }
`;