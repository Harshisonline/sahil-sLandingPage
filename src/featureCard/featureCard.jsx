import React from "react";
import style from './featureCard.module.css'

export default function FeatureCard(props){
    return(
            <div className={style.container_card}>
                <div className={style.backgroundcolor} ></div>
                <h1>
                {   props.title}
                </h1>
                <p>
                    {props.content}
                </p>
        </div>
    )
}