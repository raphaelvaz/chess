import { Game } from '../../entities/Game'

interface MoveData {
    dest: number;
    source: number
}

export interface GameRepository {
    setGame(game: Game): void
    getGame(): Game
}