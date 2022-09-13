import React, {useState} from 'react';
import s from "header/nav/Nav.module.scss"
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";

export const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

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
            <div className={openMenu
                     ? `${s.nav} ${s.menuIsOpened}`
                     : `${s.nav} ${s.menuIsClosed}`}>
                <ul>
                    <li>
                        <Link
                            to="anchorSkills"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpenMenu(false)}
                        >Мои навыки</Link>
                    </li>
                    <li>
                        <Link
                            to="anchorProjects"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpenMenu(false)}
                        >Pet проекты</Link>
                    </li>
                    <li>
                        <Link
                            to="anchorProjects"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpenMenu(false)}
                        >Отзывы клиентов</Link>
                    </li>
                    <li>
                        <Link
                            to="anchorContacts"
                            smooth={true}
                            duration={500}
                            onClick={() => setOpenMenu(false)}
                        >Контакты</Link>
                    </li>
                </ul>
            </div>
            <div onClick={() => setOpenMenu(!openMenu)}
                className={!openMenu
                    ? `${s.headerMenu} ${s.animationReverse}`
                    : `${s.headerMenu} ${s.mobileMenuActive}`}>
                <div className={s.headerBurger}>
                    <div className={s.burger}>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};