import React from 'react';
import classes from './Card.module.css';
import {FC, ReactNode} from "react";


interface CardProps {
    children: ReactNode;
}

export const Card:FC<CardProps> = ( {children}) => {
    return <div className={classes.card}>{children}</div>;
}

