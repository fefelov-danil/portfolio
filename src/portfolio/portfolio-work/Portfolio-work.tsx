import React from 'react';
import s from 'portfolio/portfolio-work/Portfolio-work.module.scss'
import {motion} from "framer-motion";
import {fadeLeftAnimation, fadeRightAnimation} from "assets/animation/animation";

type PortfolioWorkPropsType = {
    children: React.ReactNode
    link: string
    name: string
    positionImg: string
    bgImage: string
}

export const PortfolioWork = (props: PortfolioWorkPropsType) => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0.2}}
            className={s.portfolioWork}>
            <div className={s.columns}>
                <motion.div
                    variants={props.positionImg === 'right' ? fadeRightAnimation : fadeLeftAnimation}
                    className={s.screen}
                    style={{backgroundImage: `url(${props.bgImage})`}}>
                </motion.div>
                <motion.div
                    variants={props.positionImg === 'right' ? fadeLeftAnimation : fadeRightAnimation}
                    className={s.nameAndDesc}>
                    <p className={s.name}>{props.name}</p>
                    <hr/>
                    {props.children}
                    <a
                        href={props.link}
                        target={'_blank'}
                        className={"btn-animation-blicked is-blicked"}>Смотреть</a>
                </motion.div>
            </div>

        </motion.div>
    );
};