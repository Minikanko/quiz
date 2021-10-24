import React from 'react'
import styled from 'styled-components'


const MyButton=styled.a`
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    line-height: 1.6;
    font-family: inherit;
    font-weight: 600;
    color: #382b22;
    padding: 1.25em 2em;
    background: #2E8B57;
    border: 2px solid #6B8E23;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    user-select: none;
    transition: transform 0.15s ease-out, background 0.15s ease-out;
    &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #90EE90;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #6B8E23, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
    }
    &:hover {
    background: #3CB371;
    transform: translateY(0.25em);
    }`;

export function GreenButton({text,clickEvent}){
    return <MyButton onClick={clickEvent}>{text}</MyButton>
}