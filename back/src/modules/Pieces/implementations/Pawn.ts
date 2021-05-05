import { Piece } from "../model/piece";

export default class Pawn implements Piece {
    constructor(
        public readonly player: 1 | 2,
        public readonly type: 'pawn'
    ) { }

    isMovePossible(): boolean {
        return true
    }
}