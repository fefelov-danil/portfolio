import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    name: string
    desc: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <p className={s.skillName}>{props.name}</p>
            <div className={s.desc}>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

