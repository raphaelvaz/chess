import { Controller, socketData } from '../protocols'
import { UserRepository } from '../../modules/Users/repositories/models/userRepository'
import { GameRepository } from '../../modules/Game/repositories/models/gameRepository'

interface MoveData {
    dest: number;
    source: number
}

interface enterRoomData {
    userName: string
    room: string
}


export class GameEvents implements Controller {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly gameRepository: GameRepository
    ) { }

    handle(server: socketData): void {
        server.socket.on('move', ({ source, dest }: MoveData) => {
            const { room } = this.userRepository.findBySocketId(server.socket.id)
            const game = this.gameRepository.getGameByRoom(room)

            game.statePieces[dest] = game.statePieces[source]
            game.statePieces[source] = {}

            this.gameRepository.updateGame(game)
            server.io.in(room).emit('played', game.statePieces)
        })
    }
}