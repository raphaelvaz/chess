import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%; 
    
    /* TODO - WHITE SPACE BOTTOM */

    background-color: var(--dark-background-color);

    display:flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 970px){
        &{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
    @media (max-height: 400px){
        &{
            padding-bottom:250px;
        }
    }
`;