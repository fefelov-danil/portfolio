import React from 'react';
import s from './Main.module.css'
import me from 'assets/images/me.png'
import iconSet from 'assets/icomoon/selection.json'
import IcomoonReact from "icomoon-react";
import {motion} from 'framer-motion';
import {blockAnimationRotate, textAnimation} from "assets/animation/animation";

export const Main = () => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0}}
            className={s.mainBlock}>
            <motion.div
                variants={blockAnimationRotate}
                className={s.rotateBg}>
            </motion.div>
            <div className={s.mainContainer}>
                <div className={s.textAndIcon}>
                    <IcomoonReact iconSet={iconSet} color="rgba(0, 0, 0, 0.025)" icon="react-logo" />
                    <div className={s.text}>
                        <motion.h1 variants={textAnimation} custom={0.7}>Fefelov Daniil</motion.h1>
                        <motion.p variants={textAnimation} custom={1.1}>Frontend Developer</motion.p>
                    </div>
                </div>
                <div className={s.photo}>
                    <img src={me} alt=""/>
                </div>
            </div>
        </motion.div>
    );
};