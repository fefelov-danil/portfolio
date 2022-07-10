import React from 'react';
import s from './Contact.module.css'

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={s.container}>
                <h2>Контакты</h2>
                <form action="">
                    <input type="text" placeholder={"Ваше имя"}/>
                    <input type="number" placeholder={"Ваш телефон"}/>
                    <textarea placeholder={"Комментарий"}></textarea>
                    <button>Оставить заявку</button>
                </form>
            </div>
        </div>
    );
};