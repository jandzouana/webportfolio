import React from 'react'
import "./landing.css";
import Me from "../../assets/avatar.png";
import Image from "next/image";
import LandingSocials from "./LandingSocials";
import ScrollDown from "./ScrollDown";
import {aboutBlurb} from "@/app/constants";

const Landing = () => {
    return (
        <section className="landing container" id="home">
            <div className="intro">
                <div className="left container">
                    <h1 className="landing__header">Hi, it&#39;s <span className="landing__name">Jessica Andzouana</span></h1>
                    <h3 className="text-animation">I&#39;m a&nbsp;<span></span></h3>
                    <p className="about__blurb">{aboutBlurb}</p>
                    <a href="/resume.pdf" className="resume__button btn" download>Download CV</a>
                </div>
                <div className="landing__img">
                    <Image src={Me} alt="me" className="profile__pic" />
                    <LandingSocials/>
                </div>
            </div>
            <ScrollDown/>
        </section>
    )
}

export default Landing
