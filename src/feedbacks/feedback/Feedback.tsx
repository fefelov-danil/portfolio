import React, {ReactElement, useState} from 'react';
import s from './Feedback.module.scss'
import iconSet from "assets/icomoon/selection.json";
import IcomoonReact from "icomoon-react";
import {motion} from 'framer-motion';
import {fadeBottomAnimation} from "assets/animation/animation";

type FeedbackPropsType = {
    imgSrc: string
    name: string
    longText: boolean
    site: string[]
    text: ReactElement
}

export const Feedback = ({imgSrc, name, longText, site, text}: FeedbackPropsType) => {
    const [textMaxHeight, setTextMaxHeight] = useState('190px')

    const hideTextHandler = () => {
        setTextMaxHeight('initial')
    }
    const showTextHandler = () => {
        setTextMaxHeight('190px')
    }

    return (
        <motion.div
            className={s.feedback}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0.3}}>
            <motion.div className={s.colorBg} variants={fadeBottomAnimation}></motion.div>
            <motion.img src={imgSrc} alt="" variants={fadeBottomAnimation}/>
            <motion.p className={s.name} variants={fadeBottomAnimation}>{name}</motion.p>
            <motion.div
                className={s.text}
                style={{maxHeight: textMaxHeight}}
                variants={fadeBottomAnimation}>{text}</motion.div>
            {longText &&
                <motion.div className={s.showHideText} variants={fadeBottomAnimation}>
                    {textMaxHeight === '190px' && <span className={s.show} onClick={hideTextHandler}>Показать весь отзыв</span>}
                    {textMaxHeight === 'initial' && <span className={s.hide} onClick={showTextHandler}>Скрыть</span>}
                </motion.div>}
            <motion.div className={s.sites} variants={fadeBottomAnimation}>
                <p>{site.map((s, index) => {
                        return <a key={index} href={`https://${s}`} target={'_blank'}>{index === site.length - 1 ? s : `${s},`}</a>
                    })}
                </p>

            </motion.div>
            <IcomoonReact iconSet={iconSet} color={'#DCE2E6'} icon={'feedback1'} />
        </motion.div>
    );
};