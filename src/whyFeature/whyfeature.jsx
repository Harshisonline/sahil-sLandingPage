import React from "react";
import style from './whyfeature.module.css';

export default function WFeature(props) {
    return (
        <div className={`${style.cards} ${props.reverse ? style.reverse : ''}`}>
            <div className={style.contentPic}><img src={props.images} alt="" /></div>
            <div className={style.contents}>{props.contentss}</div>
        </div>
    );
}
