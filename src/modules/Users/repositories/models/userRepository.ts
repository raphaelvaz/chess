import { User } from '../../entities/User';
import { AddUserDTO } from '../DTOs/addUserDto'

export interface UserRepository {
    addUser(UserData: AddUserDTO): User
    deleteUSer(id: string): void
    findUser(id: string): User
    findByRoom(room: string): User[]
}