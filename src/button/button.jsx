import React from "react";
import style from './button.module.css';

export default function Button({ intext, classes, className, clicked }) {
    return (
        <button className={`${style[classes]} ${className}`} onClick={clicked} >
            {intext}
        </button>
    );
}
