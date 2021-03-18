import styled from 'styled-components'

export const Container = styled.div`
    width: min(65vw,650px);
    height: 100vh;
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