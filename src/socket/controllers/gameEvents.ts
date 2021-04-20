import { Controller, socketData } from '../protocols'
import { UserRepository } from '../../modules/Users/repositories/models/userRepository'
import { GameRepository } from '../../modules/Game/repositories/models/gameRepository'

interface MoveData {
    dest: number;
    source: number
}


export class GameEvents implements Controller {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly gameRepository: GameRepository
    ) { }

    handle(server: socketData): void {
        server.socket.on('move', ({ source, dest }: MoveData) => {
            const { room } = this.userRepository.findBySocketId(server.socket.id)
            const game = this.gameRepository.getGame()

            const pivo = game[dest]
            game[dest] = game[source]
            game[source] = pivo

            console.log(game)
            this.gameRepository.setGame(game)
            server.io.in(room).emit('played', game)
        })
    }
}