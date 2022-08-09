import React, {forwardRef, LegacyRef} from 'react';
import s from './Portfolio-work.module.css'
import {motion} from "framer-motion";

type PortfolioWorkPropsType = {
    imgSrc: string
    link: string
    name: string
    desc: string
}

export const PortfolioWork = forwardRef((props: PortfolioWorkPropsType, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div className={s.portfolioWork} ref={ref}>
            <div className={s.imgAndLink}>
                <img src={props.imgSrc} alt=""/>
                <a href={props.link} className={"btnHoverLeft"}>Смотреть</a>
            </div>
            <div className={s.nameAndDesc}>
                <p className={s.name}>{props.name}</p>
                <p className={s.desc}>{props.desc}</p>
            </div>
        </div>
    );
});

export const MPortfolioWork = motion(PortfolioWork);