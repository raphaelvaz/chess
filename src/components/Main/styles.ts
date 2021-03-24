import styled from 'styled-components'

export const Container = styled.div`

    width: min(65vw,650px);
    height: 100vh;
    color: var(--dark-text-color);

    @media (max-width: 970px){
        height:auto;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin: 15px 0;
    div {
        width:40px;
        width:40px;

        margin-right: 10px;
        
        border-radius: 5px;

        &.player1{
            background-color: #fff;
        }
        &.player2{
            background-color: #000;
        }
        
    }
    
`;