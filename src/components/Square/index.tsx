import React, { ButtonHTMLAttributes } from 'react';
import { FaChessPawn } from '../../styles/icons'

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    index: number,
    content: {
        player: number,
        type: string,
    }
};

function renderPiece(pieceType: string): any {
    if (pieceType === 'pawn') {
        return <FaChessPawn size={40} />
    } else {
        return ''
    }
}

const Square: React.FC<ButtonProps> = ({ index, content, children, ...rest }) => {
    return (<Container index={index} player={content.player} {...rest}>{renderPiece(content.type)}</Container>);
}

export default Square;