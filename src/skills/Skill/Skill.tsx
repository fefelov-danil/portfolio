import React from 'react';
import s from 'skills/Skill/Skill.module.scss'
import iconSet from "assets/icomoon/selection.json";
import IcomoonReact from "icomoon-react";
import { motion } from 'framer-motion';
import {bgFadeAnimation, fadeBottomAnimation, fadeRightAnimation} from "assets/animation/animation";

type SkillPropsType = {
    name: string
    desc: string
    icon: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <motion.div
            className={s.skill}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0.2}}>
            <motion.div
                className={s.colBg}
                variants={bgFadeAnimation}>
            </motion.div>
            <motion.div
                className={s.icon}
                variants={fadeRightAnimation}>
                <IcomoonReact iconSet={iconSet} color={'#c0f4c0'} icon={props.icon} />
            </motion.div>
            <motion.p
                className={s.skillName}
                variants={fadeBottomAnimation}>{props.name}</motion.p>
            <div className={s.desc}>
                <motion.p variants={fadeBottomAnimation}>{props.desc}</motion.p>
            </div>
        </motion.div>
    );
};

