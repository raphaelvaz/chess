import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'
import ChessPageImage from '../../assets/chess-image.jpg'

export const Container = styled.div`
    width:100vw;
    min-height:100vh;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    position: absolute;
    
    background: url(${ChessPageImage}) center no-repeat;
    background-size: cover;

    form {
        position:relative;
        bottom:10vh;
    }
`;

export const Title = styled.div`
    font-size: 50px;
    color:#a9a9a9;
    text-align:center;
    position:relative;
    bottom:20vh;

`;

export const Input = styled.input`
    margin-right:50px;

    padding:10px;
    padding-left: 15px;

    border-radius: 15px;
    border: none;

    @media (max-width: 710px){
            display:block;
            margin: 20px 0;
    }

    background-color: var(--dark-background-color);
    color: var(--dark-text-color);

    font-size: 17px;
    outline: none;
`;

export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    padding: 13px 30px;
    font-size: 16px;
    font-weight: bold;

    border-radius: 15px;
    border: none;
    outline: none;

    background-color: ${props => props.disabled ? '#015b2a' : '#04d361'};
    color: #fff;
    transition: background-color 0.5;

    &:hover{
        background-color: ${props => props.disabled ? '#015b2a' : '#07b355'};
    }

    cursor: ${props => props.disabled ? 'auto' : 'pointer'};
`;