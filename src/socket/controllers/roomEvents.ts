import { Socket } from "socket.io";
import { Controller } from '../protocols'
import { UserRepository } from '../../modules/Users/repositories/models/userRepository'

interface enterRoomData {
    userName: string
    room: string
}

interface User {
    socketId: string
    name: string
    room: string
}

interface roomStateData {
    state: User[]
}

export class RoomEvents implements Controller {
    constructor(private readonly userRepository: UserRepository) { }

    handle(socket: Socket): void {
        socket.on('enterRoom', async ({ userName, room }: enterRoomData) => {
            //VER QUANTAS PESSOAS TAO NO ROOM
            if (!userName && !room) {
                return new Error("Username and room are required")
            }
            if (!userName) {
                return new Error("Username is required")
            }
            if (!room) {
                return new Error("Room is required")
            }
            const roomLegth = this.userRepository.findByRoom(room).length
            if (roomLegth > 1) {
                socket.emit('roomState', { state: {} } as roomStateData)
            }
            if (roomLegth === 0) {
                const user = this.userRepository.addUser({ socketId: socket.id, name: userName, room })
                await socket.join(user.room)
                socket.emit('roomState', { state: this.userRepository.findByRoom(room) } as roomStateData)
            }
            if (roomLegth === 1) {
                const user = this.userRepository.addUser({ socketId: socket.id, name: userName, room })
                await socket.join(user.room)
                const connectedMessage = {
                    author: 'Someone came in',
                    content: user.name + " join room!"
                }
                socket.emit('roomState', { state: this.userRepository.findByRoom(room) } as roomStateData)
                const usersInRoom = this.userRepository.findByRoom(room)
                socket.in(user.room).emit('ready', usersInRoom)
                socket.in(user.room).emit("notification", connectedMessage)
            }
        })

        socket.on('disconnect', () => {
            console.log("User disconnected")
            this.userRepository.deleteUSer(socket.id)
        })
    }
}