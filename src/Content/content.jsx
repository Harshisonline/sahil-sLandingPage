import React, { useState, useEffect } from "react";
import style from './content.module.css';
import Button from "../button/button";
import CircularButton from "../circular button/circular_button";
import FeatureCard from "../featureCard/featureCard";
import WFeature from "../whyFeature/whyfeature";
import mongo from '../assets/mongodb.png';
import fastReliable from '../assets/fast_reliable.png';
import highsec from '../assets/highSec.jpg';

export default function Content() {
    const [isVisibleContainer2, setIsVisibleContainer2] = useState(false);
    const [isVisibleContainer3, setIsVisibleContainer3] = useState(false);

    useEffect(() => {
        const container2 = document.querySelector(`.${style.container_2}`);
        const container3 = document.querySelector(`.${style.container_3}`);
        
        const observer2 = new IntersectionObserver(
            ([entry]) => setIsVisibleContainer2(entry.isIntersecting),
            { threshold: 0.5 }
        );
        const observer3 = new IntersectionObserver(
            ([entry]) => setIsVisibleContainer3(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (container2) observer2.observe(container2);
        if (container3) observer3.observe(container3);

        return () => {
            if (container2) observer2.unobserve(container2);
            if (container3) observer3.unobserve(container3);
        };
    }, []);

    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div className={style.container_1}>
                <h1><span className={style.ul}>Unlimited</span> Storage for Everyone</h1>
                <div className={style.content}>
                    Enjoy truly unlimited storage for all your needs, with secure, fast, and accessible options. No more constraints on space—store and manage your files effortlessly, anytime and from any device.
                </div>
                <Button className={style.btn} styles={{ marginBottom: '10px' }} intext="Try for Free" classes="blue" />
            </div>
            <CircularButton onClick={handleScrollToBottom} />
            <div className={`${style.container_2} ${isVisibleContainer2 ? style.visible : style.hidden}`} >
                <FeatureCard 
                    title="MongoDB: NoSQL Database" 
                    content="MongoDB stores data in a flexible, document-based format, ideal for scaling and handling large datasets with high performance." />
                <FeatureCard 
                    title="Next.js: Fast & SEO-Friendly" 
                    content="Next.js offers server-side rendering and static site generation, delivering high-speed, SEO-friendly websites and seamless user experiences" />
                <FeatureCard 
                    title="Node.js: Fast & Scalable Backend" 
                    content="Node.js enables high-performance, real-time applications with a lightweight, event-driven architecture, perfect for scalable backend solutions." />
            </div>
            <div className={`${style.container_3} ${isVisibleContainer3 ? style.visible : style.hidden}`} >
                <div className={style.contentLayer}>
                    <h1>Why you should choose us?</h1>
                    <div>
                        <WFeature images={mongo}
                        contentss='Choose us for dependable, efficient solutions powered by MongoDB, a trusted database that ensures your data is always secure and accessible.' />
                        <WFeature
                        contentss='Experience fast, reliable service with us—our expertise and MongoDB integration ensure seamless, high-performance solutions tailored to your needs.'
                        images={fastReliable} reverse={true} />
                        <WFeature
                        contentss='Trust us for top-notch security; our solutions prioritize safeguarding your data with advanced protections, ensuring your peace of mind.'
                        images={highsec} />
                    </div>
                </div>
            </div>
        </div>
    );
}
