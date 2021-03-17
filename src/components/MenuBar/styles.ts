import styled from 'styled-components'

export const Container = styled.div`
    width: 180px;
    height: 100vh;
    background-color: var(--dark-background-color-aside);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-between;

    a{
        display:flex;
        align-items:center;

        text-decoration:none;

        color: var(--dark-text-color);

        padding: 11px;

        &:hover{
        color:var(--dark-text-color-hover);
        background-color: var(--dark-background-color-aside-hover);
        }
    }

    svg + strong {
        margin-left: 8px;
    }

    svg + span {
        margin-left: 8px;
    }
`;

export const Titulo = styled.div`
    a{
        color: var(--dark-text-color-title);
        padding:7px;
        margin: 5px 0;
    }
    strong{
        font-size: 2.0rem;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 1.1rem;

    a{
        &:last-child {
            color:#52b1dc;
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    a{
        padding: 7px;
    }
`;