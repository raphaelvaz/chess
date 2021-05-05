import { Piece } from "../model/piece";

export default class Rook implements Piece {
    constructor(
        public readonly player: 1 | 2,
        public readonly type: 'rook'
    ) { }

    isMovePossible(): boolean {
        return true
    }
}