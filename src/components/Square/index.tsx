import React, { ButtonHTMLAttributes } from 'react';
import { FaChessPawn, FaChessBishop, FaChessKing, FaChessKnight, FaChessQueen, FaChessRook } from '../../styles/icons'

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    index: number,
    content: {
        player: 1 | 2,
        type: string,
    }
};

function renderPiece(pieceType: string): any {
    if (pieceType === 'pawn') {
        return <FaChessPawn size={40} />
    } else if (pieceType === 'rook') {
        return <FaChessRook size={40} />
    }
    else if (pieceType === 'knight') {
        return <FaChessKnight size={40} />
    }
    else if (pieceType === 'bishop') {
        return <FaChessBishop size={40} />
    }
    else if (pieceType === 'king') {
        return <FaChessKing size={40} />
    }
    else if (pieceType === 'queen') {
        return <FaChessQueen size={40} />
    }
    else {
        return ''
    }
}

const Square: React.FC<ButtonProps> = ({ index, content, children, ...rest }) => {
    return (<Container index={index} player={content.player} {...rest}>{renderPiece(content.type)}</Container>);
}

export default Square;