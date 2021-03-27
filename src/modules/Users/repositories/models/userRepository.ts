import { User } from '../../entities/User';
import { AddUserDTO } from '../DTOs/addUserDto'

export interface UserRepository {
    addUser(UserData: AddUserDTO): User
    deleteUSer(id: string): void
    findBySocketId(id: string): User
    findAllByRoom(room: string): User[]
    deleteAllByRoom(room: string): void
}