import { GameRepository } from "./models/gameRepository";
import { Game, StatePieces } from '../entities/Game'
import initGame from "../../../helpers/initGame";

const games: Game[] = []

export class ArrayGameRepository implements GameRepository {
    addGame(room: string): Game {
        const game = { room, statePieces: initGame() }
        games.push(game)
        return game
    }
    getGameByRoom(room: string): Game {
        const game = games.find(game => game.room === room)
        if (game) return game
        return {} as Game
    }
    updateGame(game: Game) {
        games.map(storageGame => storageGame.room === game.room ? game : storageGame)
    }
    deleteGameByRoom(room: string): void {
        const index = games.findIndex(game => game.room === room)
        games.splice(index, 1)
    }
}