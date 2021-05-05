import { Piece } from "../model/piece";

export default class Queen implements Piece {
    constructor(
        public readonly player: 1 | 2,
        public readonly type: 'queen'
    ) { }

    isMovePossible(): boolean {
        return true
    }
}