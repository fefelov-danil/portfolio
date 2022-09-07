import React from 'react';
import s from "header/nav/Nav.module.scss"
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link
                to="anchorSkills"
                smooth={true}
                duration={500}
            >Мои навыки</Link>
            <Link
                to="anchorProjects"
                smooth={true}
                duration={500}
            >Pet проекты</Link>
            <Link
                to="anchorProjects"
                smooth={true}
                duration={500}
            >Отзывы клиентов</Link>
            <Link
                to="anchorContacts"
                smooth={true}
                duration={500}
            >Контакты</Link>
        </div>
    );
};