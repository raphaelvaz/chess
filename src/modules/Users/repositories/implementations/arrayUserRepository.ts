import { User } from "../../entities/User";
import { AddUserDTO } from "../DTOs/addUserDto";
import { UserRepository } from "../models/userRepository";

const users: User[] = []

export class ArrayUserRepository implements UserRepository {
    addUser(userData: AddUserDTO): User {
        users.push(userData)
        const user: User = userData
        return user
    }
    deleteUSer(id: string) {
        const index = users.findIndex(user => user.socketId === id)
        users.splice(index, 1)
    }
    findUser(id: string): User {
        return users.find(user => user.socketId === id)
    }
    findByRoom(room: string): User[] {
        return users.filter(user => user.room === room)
    }
}