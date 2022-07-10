import React from 'react';
import sContainer from '../general-css/Container.module.css'
import s from './Portfolio.module.css'
import {PortfolioWork} from "./portfolio-work/Portfolio-work";

export const Portfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={sContainer.container}>
                <h2>Мои работы</h2>
                <div className={s.portfolioWorks}>
                    <PortfolioWork
                        imgSrc={"https://img5.goodfon.ru/wallpaper/nbig/f/40/krasnyi-fon-shar-krasochnye-razvody-sfera-minimalizm-red-bac.jpg"}
                        link={"#"}
                        name={"Название проекта"}
                        desc={"Краткое описание"}/>
                    <PortfolioWork
                        imgSrc={"https://img4.goodfon.ru/wallpaper/nbig/7/c4/sony-xperia-premium-sony-xperia-black.jpg"}
                        link={"#"}
                        name={"Название проекта"}
                        desc={"Краткое описание"}/>
                </div>
            </div>
        </div>
    );
};