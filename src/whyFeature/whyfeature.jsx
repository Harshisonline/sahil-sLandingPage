import React from "react";
import style from './whyfeature.module.css';

export default function WFeature(props) {
    return (
        <div className={`${style.cards} ${props.reverse ? style.reverse : ''}`}>
            <div className={style.contentPic}><img src={props.images} alt="" /></div>
            <div className={style.contents}>what is your name is so good and you are so handsome</div>
        </div>
    );
}