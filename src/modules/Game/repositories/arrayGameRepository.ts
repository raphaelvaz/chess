import { GameRepository } from "./models/gameRepository";
import { Game } from '../entities/Game'
import initGame from "../../../helpers/initGame";

export class ArrayGameRepository implements GameRepository {
    private game: Game
    constructor() {
        this.game = initGame()
    }

    setGame(game: Game): void {
        this.game = game
    }
    getGame(): Game {
        return this.game
    }
}