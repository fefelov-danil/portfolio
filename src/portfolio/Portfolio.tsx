import React from 'react';
import s from 'portfolio/Portfolio.module.scss'
import {motion} from 'framer-motion'
import {PortfolioWork} from "./portfolio-work/Portfolio-work";
import {textBgAnimation} from "assets/animation/animation";
import todoImage from 'assets/images/todo1.png'
import packsImage from 'assets/images/packs.png'
import todoPhoneImage from 'assets/images/todo-phone1.png'
import packsPhoneImage from 'assets/images/packs-phone.png'

export const Portfolio = () => {
    return (
        <div className={s.portfolioBlock} id={'anchorProjects'}>
            <motion.h2
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{once: true, amount: 0.2}}>
                <span className="titleBg">МОИ РАБОТЫ
                    <motion.span className="titleBgIn" variants={textBgAnimation}></motion.span>
                </span>
            </motion.h2>
            <div className={s.portfolioWorks}>
                <PortfolioWork
                    link={"https://incubator-friday.vercel.app/"}
                    gitHubLink={'https://github.com/fefelov-danil/incubator-friday'}
                    name={"Обучение"}
                    positionImg={'right'}
                    bgImage={window.innerWidth > 1020 ? packsImage : packsPhoneImage}>
                    <div>
                        <p>Функционал:</p>
                        <ul className="ul-custom">
                            <li>CRUD оперции с колодами и карточками</li>
                            <li>Обучение по своим и чужим карточкам</li>
                            <li>Добавление картинок</li>
                            <li>Фильтры, useDebounce</li>
                            <li>UseSearchParams для фильтров</li>
                            <li>Соритровка</li>
                            <li>Погинация</li>
                        </ul>
                    </div>
                </PortfolioWork>
                <PortfolioWork
                    link={"https://todolist.fefelow.ru/"}
                    gitHubLink={'https://github.com/fefelov-danil/todolist'}
                    name={"TodoList"}
                    positionImg={'left'}
                    bgImage={window.innerWidth > 1020 ? todoImage : todoPhoneImage}>
                    <div>
                        <p>Функционал:</p>
                        <ul className="ul-custom">
                            <li>CRUD оперции с тудулистами и задачами</li>
                            <li>Управление статусом задач</li>
                            <li>Сортировка задач по статусу</li>
                            <li>Адаптивный дизайн</li>
                            <li>Интуитивно понятный интерфейс</li>
                        </ul>
                    </div>
                </PortfolioWork>
            </div>
        </div>
    );
};