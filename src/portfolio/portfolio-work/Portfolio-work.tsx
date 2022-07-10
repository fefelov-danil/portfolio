import React from 'react';
import sContainer from '../general-css/Container.module.css'
import sButtons from '../../general-css/Buttons.module.css'
import s from './Portfolio-work.module.css'

type PortfolioWorkPropsType = {
    imgSrc: string
    link: string
    name: string
    desc: string
}

export const PortfolioWork = (props: PortfolioWorkPropsType) => {
    return (
        <div className={s.portfolioWork}>
            <div className={s.imgAndLink}>
                <img src={props.imgSrc} alt=""/>
                <a href={props.link} className={sButtons.btnHoverLeft}>Смотреть</a>
            </div>
            <div className={s.nameAndDesc}>
                <p className={s.name}>{props.name}</p>
                <p className={s.desc}>{props.desc}</p>
            </div>
        </div>
    );
};

