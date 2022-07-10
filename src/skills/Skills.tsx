import React from 'react';
import sContainer from '../general-css/Container.module.css'
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={sContainer.container}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill name={"JS"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Skill name={"CSS"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Skill name={"REACT"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                </div>
            </div>
        </div>
    );
};