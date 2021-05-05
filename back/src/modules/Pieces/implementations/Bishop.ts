import { Piece } from "../model/piece";

export default class Bishop implements Piece {
    constructor(
        public readonly player: 1 | 2,
        public readonly type: 'bishop'
    ) { }

    isMovePossible(): boolean {
        return true
    }
}