import React from 'react';
import s from 'contact/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import blockBackground from "assets/images/fon-4.jpg";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";

export const Contact = () => {
    return (
        <div className={s.contactBlock}
             style = {{backgroundImage: `url('${blockBackground}')`}}
             id="anchorContacts">
            <div className={s.container}>
                <h2>Контакты</h2>
                <hr/>
                <p className={s.subtitle}>Пишите или звоните, буду рад ответиь на вопросы:</p>
                <p className={s.phoneAndSocial}>
                    <a href="https://telegram.me/Danil_Fefelov"
                       className={s.telegram} target="_blank"
                       title="Telegram">
                        <FontAwesomeIcon icon={faTelegram} color="#249CD7" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79832664581"
                       className={s.whatsapp} target="_blank" title="WhatsApp">
                        <FontAwesomeIcon icon={faWhatsapp} color="#2AC54D" />
                    </a>
                    <a href="tel:+79832664581" className={s.phone}>8 983 266 4581</a>
                    <a href="https://github.com/fefelov-danil"
                       className={s.github} target={'_blank'}>
                        <FontAwesomeIcon icon={faGithub} color="#24292E" />
                    </a>
                    <a href="https://www.instagram.com/danil_fefelow"
                       className={s.instagram} target={'_blank'}>
                        <FontAwesomeIcon icon={faInstagram} color="#DD5D3E" />
                    </a>
                </p>
            </div>
        </div>
    );
};