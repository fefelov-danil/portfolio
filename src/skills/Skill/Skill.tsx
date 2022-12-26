import React, {FC} from 'react';
import s from 'skills/Skill/Skill.module.scss'
import iconSet from "assets/icomoon/selection.json";
import IcomoonReact from "icomoon-react";
import {motion} from 'framer-motion';
import {bgFadeAnimation, fadeBottomAnimation, fadeRightAnimation} from "assets/animation/animation";

type SkillPropsType = {
  children: React.ReactNode
  name: string
  icon: string
}

export const Skill:FC<SkillPropsType> = ({name, icon, children}) => {
  return (
    <motion.div
      className={s.skill}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{once: true, amount: 0.3}}>
      <motion.div
        className={s.colBg}
        variants={bgFadeAnimation}>
      </motion.div>
      <motion.div
        className={s.icon}
        variants={fadeRightAnimation}>
        <IcomoonReact iconSet={iconSet} color={'#c0f4c0'} icon={icon}/>
      </motion.div>
      <motion.p
        className={s.skillName}
        variants={fadeBottomAnimation}>{name}</motion.p>
      <div className={s.desc}>
        <motion.p variants={fadeBottomAnimation}>{children}</motion.p>
      </div>
    </motion.div>
  );
};

