import React from 'react';

import Table from '../Table'
import { Container, Profile, ProfileText } from './styles';

const Main: React.FC = () => {
    return (

        <Container>
            <Profile>
                <img src='https://avatars.githubusercontent.com/u/42014582?s=460&u=2d7def55f1d78438417f4c6513a9b1dbea6bb149&v=4' alt='profileImage' />
                <ProfileText>
                    <strong>raphaeltrombetta</strong><span>(1000)</span>
                </ProfileText>
                {/* <Timer /> */}
            </Profile>
            <Table />
            <Profile>
                <img src='https://avatars.githubusercontent.com/u/42014582?s=460&u=2d7def55f1d78438417f4c6513a9b1dbea6bb149&v=4' alt='profileImage' />
                <ProfileText>
                    <strong>miro</strong><span>(1200)</span>
                </ProfileText>
                {/* <Timer /> */}
            </Profile>
        </Container>
    )
}

export default Main;