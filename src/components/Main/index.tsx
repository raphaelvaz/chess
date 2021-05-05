import React from 'react';

import Table from '../Table'
import { Container, Profile } from './styles';
import { useUsers } from '../../hooks/user'

const Main: React.FC = () => {
    const { users } = useUsers()
    return (

        <Container>
            <Profile>
                <div className='player1' />
                <strong>{users[0].name}</strong>
                {/* <Timer /> */}
            </Profile>
            <Table />
            <Profile>
                <div className='player2' />
                <strong>{users[1].name}</strong>
                {/* <Timer /> */}
            </Profile>
        </Container>
    )
}

export default Main;