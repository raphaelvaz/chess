import { Piece } from "../model/piece";

export default class King implements Piece {
    constructor(
        public readonly player: 1 | 2,
        public readonly type: 'king'
    ) { }

    isMovePossible(): boolean {
        return true
    }
}