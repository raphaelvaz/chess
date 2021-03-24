import React, { createContext, useContext, useState } from 'react'

interface User {
    socketId: string;
    name: string;
    room: string;
}

interface UserContextData {
    users: User[];
    setUsers(user: User[]): void
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: React.FC = ({ children }) => {
    const [users, setUsers] = useState<User[]>([])

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    )
}

function useUsers(): UserContextData {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be within an UserProvider')
    return context;
}

export { UserProvider, useUsers }