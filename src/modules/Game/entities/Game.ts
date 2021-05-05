import { Piece } from "../../Pieces/model/piece";


export type StatePieces = Piece[] | {}[]

export interface Game {
    room: string;
    statePieces: StatePieces;
}