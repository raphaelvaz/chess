export interface Piece {
    player: 1 | 2
    type: string
    isMovePossible(): boolean
}