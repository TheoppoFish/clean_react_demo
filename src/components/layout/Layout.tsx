import React, {FC, PropsWithChildren} from "react";
import {MainNavigation} from './MainNavigation';
import classes from './Layout.module.css';


export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <section>
            <MainNavigation/>
            <div className={classes.shadow}></div>
            <main className={classes.main}>{children}</main>
        </section>
    );
}

