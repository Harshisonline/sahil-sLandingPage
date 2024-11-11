import React, { useState, useEffect } from "react";
import style from './content.module.css';
import Button from "../button/button";
import CircularButton from "../circular button/circular_button";
import FeatureCard from "../featureCard/featureCard";
import WFeature from "../whyFeature/whyfeature";
import mongo from '../assets/mongodb.png';
import fastReliable from '../assets/fast_reliable.png'
import highsec from '../assets/highSec.jpg'

export default function Content() {
    const [isVisibleContainer2, setIsVisibleContainer2] = useState(false);
    const [isVisibleContainer3, setIsVisibleContainer3] = useState(false);

    useEffect(() => {
        const container2 = document.querySelector(`.${style.container_2}`);
        const container3 = document.querySelector(`.${style.container_3}`);
        
        const observer2 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleContainer2(true);
                } else {
                    setIsVisibleContainer2(false);
                }
            },
            { threshold: 0.5 }
        );
        const observer3 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleContainer3(true);
                } else {
                    setIsVisibleContainer3(false);
                }
            },
            { threshold: 0.5 }
        );

        if (container2) observer2.observe(container2);
        if (container3) observer3.observe(container3);

        return () => {
            if (container2) observer2.unobserve(container2);
            if (container3) observer3.unobserve(container3);
        };
    }, []);

    return (
        <div>
            <div className={style.container_1}>
                <h1><span className={style.ul}>Unlimited</span> Storage for Everyone</h1>
                <div className={style.content}>
                    [countable] a small piece of something, especially paper, cloth, etc. She scribbled his phone number on a scrap of paper. (figurative) She was just a scrap of a thing (= small and thin).
                </div>
                <Button className={style.btn} styles={{ marginBottom: '10px' }} intext="Try for Free" classes="blue" />
            </div>
            <CircularButton />
            <div className={`${style.container_2} ${isVisibleContainer2 ? style.visible : style.hidden}`} >
                <FeatureCard 
                    title="Feature 1 heading" 
                    content="Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football generally means the form of football that " />
                <FeatureCard 
                    title="Feature 2 heading" 
                    content="Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football generally means the form of football that " />
                <FeatureCard 
                    title="Feature 3 heading" 
                    content="Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football generally means the form of football that " />
            </div>
            <div className={`${style.container_3} ${isVisibleContainer3 ? style.visible : style.hidden}`} >
                <div className={style.contentLayer}>
                    <h1>Why you should choose us?</h1>
                    <div>
                        <WFeature images={mongo} />
                        <WFeature images={fastReliable} reverse={true} />
                        <WFeature images={highsec} />
                    </div>
                </div>
            </div>
        </div>
    );
}
