import React from 'react';
import classes from './MainNavigation.module.css';
import {useNavigate} from "react-router-dom";
import {FC} from "react";

export const MainNavigation: FC = () => {
    const navigate = useNavigate()
    return (
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => navigate('/')}>All Meetups</button>
                        </li>
                        <li>
                            <button onClick={() => navigate('/new-meetup')}>Add New Meetup</button>
                        </li>
                    </ul>
                </nav>
            </header>

    );
}

