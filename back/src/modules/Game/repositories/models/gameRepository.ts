import { Game } from '../../entities/Game'

export interface GameRepository {
    addGame(room: string): Game
    deleteGameByRoom(room: string): void
    updateGame(game: Game): void
    getGameByRoom(room: string): Game
}