import { Controller, socketData } from '../protocols'
import { UserRepository } from '../../modules/Users/repositories/models/userRepository'
import { GameRepository } from '../../modules/Game/repositories/models/gameRepository'

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
    constructor(private readonly userRepository: UserRepository,
        private readonly gameRepository: GameRepository
    ) { }

    handle(server: socketData): void {
        server.socket.on('enterRoom', async ({ userName, room }: enterRoomData) => {
            console.log(userName, room)
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
            const roomLegth = this.userRepository.findAllByRoom(room).length
            if (roomLegth > 1) {
                server.socket.emit('roomState', { state: {} } as roomStateData)
            }
            if (roomLegth === 0) {
                const user = this.userRepository.addUser({ socketId: server.socket.id, name: userName, room })
                await server.socket.join(user.room)
                server.socket.emit('roomState', { state: this.userRepository.findAllByRoom(room) } as roomStateData)
            }
            if (roomLegth === 1) {
                const user = this.userRepository.addUser({ socketId: server.socket.id, name: userName, room })
                await server.socket.join(user.room)
                const connectedMessage = {
                    id: '123',
                    author: 'Someone came in',
                    content: user.name + " join room!"
                }
                server.socket.emit('roomState', { state: this.userRepository.findAllByRoom(room) } as roomStateData)
                const usersInRoom = this.userRepository.findAllByRoom(room)
                server.socket.in(user.room).emit('ready', usersInRoom)
                server.socket.in(user.room).emit("notification", connectedMessage)

                const game = this.gameRepository.addGame(room)
                console.log(game)
                server.io.in(user.room).emit('startGame', game.statePieces)
            }
        })

        server.socket.on('playerLeft', (id: string) => {
            const { room } = this.userRepository.findBySocketId(id)
            this.userRepository.deleteAllByRoom(room)
            this.gameRepository.deleteGameByRoom(room)
            server.socket.in(room).emit('quit')
        })

        server.socket.on('disconnect', () => {
            const { room } = this.userRepository.findBySocketId(server.socket.id)
            this.userRepository.deleteAllByRoom(room)
            this.gameRepository.deleteGameByRoom(room)
            server.socket.in(room).emit('quit')
            console.log("User disconnected")
            this.userRepository.deleteUSer(server.socket.id)
        })
    }
}