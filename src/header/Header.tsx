import React from 'react';
import sContainer from '../general-css/Container.module.css'
import s from "./Header.module.css"
import {Nav} from "./nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={sContainer.container}>
                <Nav/>
            </div>
        </div>
    );
};