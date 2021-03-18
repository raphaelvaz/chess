import styled from 'styled-components'

export const Container = styled.div`
    width: min(65vw,650px);
    height: 100vh;
    padding: 0 40px;
    
    color: var(--dark-text-color)
`;

export const Profile = styled.div`
    display: flex;
    margin: 15px 0;

    img{
        width:40px;
        width:40px;

        border-radius: 5px;
    }
    
`;

export const ProfileText = styled.div`
    margin-left: 10px;
    span{
        margin-left: 4px;
    }
`;

export const Table = styled.div`
    min-width: 300px;
    min-height: 300px;
    width: min(61vw, min(80vh, 560px));
    height: min(61vw, min(80vh, 560px));
    background-color: green;

    border-radius: 5px;
`;