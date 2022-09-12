import React, {LegacyRef, ReactElement, useEffect, useRef, useState} from 'react';
import s from './Feedback.module.scss'
import iconSet from "assets/icomoon/selection.json";
import IcomoonReact from "icomoon-react";

type FeedbackPropsType = {
    imgSrc: string
    name: string
    longText: boolean
    text: ReactElement
}

export const Feedback = (props: FeedbackPropsType) => {
    const [textMaxHeight, setTextMaxHeight] = useState('190px')

    const hideTextHandler = () => {
        setTextMaxHeight('initial')
    }
    const showTextHandler = () => {
        setTextMaxHeight('190px')
    }

    return (
        <div className={s.feedback}>
            <img src={props.imgSrc} alt=""/>
            <p className={s.name}>{props.name}</p>
            <div className={s.text} style={{maxHeight: textMaxHeight}}>{props.text}</div>
            {props.longText &&
                <div className={s.showHideText}>
                    {textMaxHeight === '190px' && <span className={s.show} onClick={hideTextHandler}>Показать весь отзыв</span>}
                    {textMaxHeight === 'initial' && <span className={s.hide} onClick={showTextHandler}>Скрыть</span>}
                </div>}
            <IcomoonReact iconSet={iconSet} color={'#333333'} icon={'feedback1'} />
        </div>
    );
};