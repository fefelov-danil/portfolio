import React from 'react';
import sContainer from '../general-css/Container.module.css'
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Fefelov Daniil</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};