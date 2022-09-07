import React from 'react';
import s from "header/Header.module.scss"
import {Nav} from "./nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={"container"}>
                <Nav/>
            </div>
        </div>
    );
};