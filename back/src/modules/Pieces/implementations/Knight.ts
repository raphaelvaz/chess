import { Piece } from "../model/piece";

export default class Knight implements Piece {
    constructor(
        public readonly player: 1 | 2,
        public readonly type: 'knight'
    ) { }

    isMovePossible(): boolean {
        return true
    }
}