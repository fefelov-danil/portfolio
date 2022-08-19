import React from 'react';
import s from 'portfolio/Portfolio.module.scss'
import {motion} from 'framer-motion'
import {MPortfolioWork} from "./portfolio-work/Portfolio-work";
import {blockAnimation, textBgAnimation} from "assets/animation/animation";
import todoImage from 'assets/images/todo.jpg'

export const Portfolio = () => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0.2}}
            className={s.portfolioBlock}>
            <h2>
                <span className="titleBg">МОИ РАБОТЫ
                    <motion.span className="titleBgIn" variants={textBgAnimation}></motion.span>
                </span>
            </h2>
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{once: true, amount: 0.2}}
                className={s.portfolioWorks}>
                <MPortfolioWork
                    variants={blockAnimation}
                    link={"#"}
                    name={"TodoList"}
                    desc={
                        <div>
                            <p>Функционал:</p>
                            <ul className="ul-custom">
                                <li>Создание/удаление тудулистов</li>
                                <li>Создание/удаление задач</li>
                                <li>Перетаскивание задач и тудулистов</li>
                                <li>Изменение заголовков задач и тудулистов</li>
                                <li>Изменение статуса задач</li>
                                <li>Сортировка задач по статусу</li>
                            </ul>
                            <p>Какие технологии использую:</p>
                            <ul className="ul-custom">
                                <li>React</li>
                                <li>Redux</li>
                                <li>Реализована работа с сервером через axios</li>
                                <li>Для диспатчей использую thunk middleware</li>
                                <li>Отдельно для некоторых компонент сделал истории в storybook</li>
                                <li>На все редьюсеры написал unit тесты</li>
                            </ul>
                        </div>
                    }
                    positionImg={'left'}
                    bgImage={todoImage}/>
                <MPortfolioWork
                    variants={blockAnimation}
                    link={"#"}
                    name={"Название проекта"}
                    desc={
                        <div>
                            <p>Функционал:</p>
                            <ul className="ul-custom">
                                <li>Создавать/удалять тудулисты</li>
                                <li>Создавать/удалять задачи</li>
                                <li>Перетаскивать задачи и тудулисты</li>
                                <li>Менять заголовки задач и тудулистов</li>
                                <li>Менять статус задач</li>
                                <li>Сотрировать задачи</li>
                            </ul>
                            <p>Какие технологии использую:</p>
                            <ul className="ul-custom">
                                <li>React</li>
                                <li>Redux</li>
                                <li>Реализована работа с сервером через axios</li>
                                <li>Для диспатчей использую thunk middleware</li>
                                <li>Отдельно для некоторых компонент сделал истории в storybook</li>
                                <li>На все редьюсеры написал unit тесты</li>
                            </ul>
                        </div>
                    }
                    positionImg={'right'}
                    bgImage={todoImage}/>
            </motion.div>
        </motion.div>
    );
};