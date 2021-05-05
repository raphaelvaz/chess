import Rook from '../modules/Pieces/implementations/Rook'
import Pawn from '../modules/Pieces/implementations/Pawn'
import Knight from '../modules/Pieces/implementations/Knight'
import King from '../modules/Pieces/implementations/King'
import Queen from '../modules/Pieces/implementations/Queen'
import Bishop from '../modules/Pieces/implementations/Bishop'

export default function initGame() {
    const squares = Array(64).fill({});

    for (var i = 8; i < 16; i++) {
        squares[i] = new Pawn(1, 'pawn')
    }

    for (var i = 48; i < 56; i++) {
        squares[i] = new Pawn(2, 'pawn')
    }

    squares[0] = new Rook(1, 'rook')
    squares[7] = new Rook(1, 'rook')

    squares[63] = new Rook(2, 'rook')
    squares[56] = new Rook(2, 'rook')

    squares[1] = new Knight(1, 'knight')
    squares[6] = new Knight(1, 'knight')

    squares[62] = new Knight(2, 'knight')
    squares[57] = new Knight(2, 'knight')

    squares[2] = new Bishop(1, 'bishop')
    squares[5] = new Bishop(1, 'bishop')

    squares[61] = new Bishop(2, 'bishop')
    squares[58] = new Bishop(2, 'bishop')

    squares[4] = new King(1, 'king')
    squares[59] = new King(2, 'king')

    squares[3] = new Queen(1, 'queen')
    squares[60] = new Queen(2, 'queen')

    return squares;
}