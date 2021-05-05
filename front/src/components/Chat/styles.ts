import styled from 'styled-components'


export const Container = styled.div`

`;

export const MessageBox = styled.div`
    background-color: var(--dark-background-color-sidebar);
    margin: auto;
    padding: 10px;
    margin-top: 5px;
    width: 97%;
    height: 25vh;
    border-radius: 5px;
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
`;

export const Form = styled.form`
    display:flex;
    align-items: center;
    justify-content: center;
    input{
        width:100%;
        height: 30px;

        border-radius: 5px;
        border: none;

        outline:none;
        padding: 10px 20px 10px;
        margin: 5px;

        background-color: var(--dark-background-color-aside-hover);
        color: var(--dark-text-color); 
    }
    button{
        width: 100px;
        height: 30px;

        border-radius: 5px;
        border:none;

        margin-right: 5px;

        font-weight: bold;

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