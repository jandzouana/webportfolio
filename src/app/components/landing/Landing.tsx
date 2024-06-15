import React from 'react'
import "./landing.css";
import Me from "../../assets/icons/avatar-1.svg";
import Image from "next/image";
import LandingSocials from "./LandingSocials";
import ScrollDown from "./ScrollDown";
import {aboutBlurb} from "@/app/constants";

const Landing = () => {
    return (
        <section className="landing container" id="home">
            <div className="intro">
                <div className="left">
                    <h1 className="landing__header">Hi, it&#39;s <span className="landing__name">Jessica Andzouana</span></h1>
                    <h3 className="text-animation">I&#39;m a&nbsp;<span></span></h3>
                    <p className="about__blurb">{aboutBlurb}</p>
                    <LandingSocials/>
                </div>
                <Image src={Me} alt="me" className="landing__img"/>
            </div>
            <ScrollDown/>
        </section>
    )
}

export default Landing
