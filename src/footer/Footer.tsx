import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <h2>Даниил Фефелов</h2>
                <div className={s.footerBoxes}>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                </div>
                <p className={s.copyright}>© 2022 Все права защищены</p>
            </div>
        </div>
    );
};

