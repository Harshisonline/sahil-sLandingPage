import React from "react";
import style from './CB.module.css';

export default function CircularButton({ onClick }) {
    return (
        <button className={style.cbutton} onClick={onClick}>↓</button>
    );
}
