import React, {forwardRef, LegacyRef, ReactElement} from 'react';
import s from 'portfolio/portfolio-work/Portfolio-work.module.scss'
import {motion} from "framer-motion";

type PortfolioWorkPropsType = {
    link: string
    name: string
    desc: ReactElement
    positionImg: string
    bgImage: string
}

export const PortfolioWork = forwardRef((props: PortfolioWorkPropsType, ref: LegacyRef<HTMLDivElement>) => {
    const positionImg = props.positionImg === 'right' ? '0' : '1'
    const bg = props.positionImg === 'right' ? '#ffffff' : '#f5f5f5'
    return (
        <div className={s.portfolioWork} style={{background: bg}} ref={ref}>
            <div className={s.columns}>
                <div
                    className={s.workImg}
                    style={{order: positionImg, backgroundImage: `url(${props.bgImage})`}}>
                </div>
                <div className={s.nameAndDesc}>
                    <p className={s.name}>{props.name}</p>
                    <hr/>
                    {props.desc}
                    <a
                        href={props.link}
                        className={"btn-animation-blicked is-blicked"}>Смотреть</a>
                </div>
            </div>

        </div>
    );
});

export const MPortfolioWork = motion(PortfolioWork);