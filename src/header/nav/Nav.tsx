import React from 'react';
import s from "header/nav/Nav.module.scss"
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";

export const Nav = () => {
    return (
        <div className={s.navAndContacts}>
            <div className={s.contacts}>
                <a href="tel:+79832664581" className={s.phone}><FontAwesomeIcon icon={faPhone} color="#444" /></a>
                <a href="https://telegram.me/Danil_Fefelov"
                   className={s.telegram} target="_blank"
                   title="Telegram">
                    <FontAwesomeIcon icon={faTelegram} color="#249CD7" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=79832664581"
                   className={s.whatsapp} target="_blank" title="WhatsApp">
                    <FontAwesomeIcon icon={faWhatsapp} color="#2AC54D" />
                </a>
            </div>
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
        </div>
    );
};