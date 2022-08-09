import React from 'react';
import s from './Portfolio.module.css'
import {motion} from 'framer-motion'
import {MPortfolioWork} from "./portfolio-work/Portfolio-work";
import {blockAnimation} from "assets/animation/animation";

export const Portfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={"container"}>
                <h2>Мои работы</h2>
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once: true, amount: 0.2}}
                    className={s.portfolioWorks}>
                    <MPortfolioWork
                        variants={blockAnimation}
                        imgSrc={"https://img5.goodfon.ru/wallpaper/nbig/f/40/krasnyi-fon-shar-krasochnye-razvody-sfera-minimalizm-red-bac.jpg"}
                        link={"#"}
                        name={"Название проекта"}
                        desc={"Краткое описание"}/>
                    <MPortfolioWork
                        variants={blockAnimation}
                        imgSrc={"https://img4.goodfon.ru/wallpaper/nbig/7/c4/sony-xperia-premium-sony-xperia-black.jpg"}
                        link={"#"}
                        name={"Название проекта"}
                        desc={"Краткое описание"}/>
                </motion.div>
            </div>
        </div>
    );
};