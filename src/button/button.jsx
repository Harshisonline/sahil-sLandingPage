import React from "react";
import style from './button.module.css';

export default function Button({ intext, classes, className }) {
    return (
        <button className={`${style[classes]} ${className}`}>
            {intext}
        </button>
    );
}
