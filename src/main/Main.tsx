import React, {useRef} from 'react';
import s from 'main/Main.module.scss'
import me from 'assets/images/me.png'
import iconSet from 'assets/icomoon/selection.json'
import IcomoonReact from "icomoon-react";
import {motion} from 'framer-motion';
import {blockAnimationMobileRotate, blockAnimationRotate, textAnimation} from "assets/animation/animation";
import blockBackground from 'assets/images/gplay2.png'

export const Main = () => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0}}
            className={s.mainBlock}>
            <div
                className={s.mainBlockBg}
                style = {{backgroundImage: `url('${blockBackground}')`}}></div>
            <motion.div
                variants={window.innerWidth > 800 ? blockAnimationRotate : blockAnimationMobileRotate}
                className={s.rotateBg}>
            </motion.div>
            <div className={s.mainContainer}>
                <div className={s.textAndIcon}>
                    <IcomoonReact iconSet={iconSet} color="rgba(0, 0, 0, 0.025)" icon="react-logo" />
                    <div className={s.text}>
                        <motion.h1 variants={textAnimation} custom={0.7}>Фефелов Даниил</motion.h1>
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