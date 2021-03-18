import styled from 'styled-components'


export const Container = styled.div`
    min-width: 400px;
    width: min(50vw, 500px);

    margin: auto 0;
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
    width: 100%;
    height: 45vh;
    background-color:var(--dark-background-color-aside);

    @media (max-width: 970px){
        height:20vh;
    }
`;

export const TaskBar = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: var(--dark-background-color-sidebar);

    div{
        display:flex;
        align-items:center;
        justify-content:center;

        svg{
            margin-right: 3px;
        }
    }
`;