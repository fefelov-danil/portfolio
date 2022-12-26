import React, {FC} from 'react';
import s from 'portfolio/portfolio-work/Portfolio-work.module.scss'
import {motion} from "framer-motion";
import {fadeLeftAnimation, fadeRightAnimation} from "assets/animation/animation";
import iconSet from "assets/icomoon/selection.json";
import IcomoonReact from "icomoon-react";

type PortfolioWorkPropsType = {
  children: React.ReactNode
  link: string
  gitHubLink: string
  name: string
  positionImg: string
  bgImage: string
}

export const PortfolioWork: FC<PortfolioWorkPropsType> = ({gitHubLink, link, name, positionImg, bgImage, children}) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{once: true, amount: 0.2}}
      className={s.portfolioWork}>
      <div className={s.columns}>
        <motion.div
          variants={positionImg === 'right' ? fadeRightAnimation : fadeLeftAnimation}
          className={s.screen}
          style={{backgroundImage: `url(${bgImage})`}}>
        </motion.div>
        <motion.div
          variants={positionImg === 'right' ? fadeLeftAnimation : fadeRightAnimation}
          className={s.nameAndDesc}>
          <p className={s.name}>{name}</p>
          <hr/>
          {children}
          <div className={s.links}>
            <a
              className={"btn-animation-blicked is-blicked"}
              href={link}
              target={'_blank'}>Смотреть</a>
            <a className={s.gh} href={gitHubLink} target={'_blank'}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'github'}/>
            </a>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
};