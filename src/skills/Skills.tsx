import React from 'react';
import s from 'skills/Skills.module.scss'
import {Skill} from "./Skill/Skill";
import blockBackground from 'assets/images/fon-2.jpg'
import { motion } from 'framer-motion';
import {textBgAnimation} from "assets/animation/animation";

export const Skills = () => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0.2}}
            className={s.skillsBlock}
            style = {{backgroundImage: `url('${blockBackground}')`}}>
            <div className={"container"}>
                <h2>
                    <span className="titleBg">НАВЫКИ
                        <motion.span className="titleBgIn" variants={textBgAnimation}></motion.span>
                    </span>
                </h2>
                <div className={s.skills}>
                    <Skill name={"JS"} icon={'js'} desc={"Много времени уделил изучению js. Применял знания на практике. Создавал сайты с калькуляторами и различными интерактивными элементами. Интересен этот язык программирования."}/>
                    <Skill name={"React"} icon={'react-logo'} desc={"React + Redux - это две технологии которые для меня наиболее интересны. Создал несколько pet проектов на React. В которых использовал redux, работал с сервером при помощи thunk и axios, писал unit тесты, использовал storybook, применял material ui. Больше всего хочу работать именно с React."}/>
                    <Skill name={"HTML"} icon={'html'} desc={"Более 6 лет занимался созданием сайтов, работал напрямую с заказчиками. Делал на WordPress и October CMS. Хорошо знаю HTML, однако хочу работать в первую очерель с js и React. Но уверен, что опыт который получил будет полезен."}/>
                    <Skill name={"CSS"} icon={'css3'} desc={"Большой опыт в написании css стилей. Все сайты, которые создавал, делал адаптивными. Знаю препроцессоры в своих pet пароектах использовал scss. Хотя в работе при создании сайтов писал все на чистом css."}/>
                </div>
            </div>
        </motion.div>
    );
};

