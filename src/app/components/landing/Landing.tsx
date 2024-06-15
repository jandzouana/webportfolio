import React from 'react'
import "./landing.css";
import Me from "../../assets/icons/avatar-1.svg";
import Image from "next/image";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Landing = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <Image src={Me} alt="me" className="home__img"/>
                <h1 className="home__name">Jessica Andzouana</h1>
                <span className="home__education">I&#39;m a frontend developer</span>
                <HeaderSocials/>

                <ScrollDown/>
            </div>
        </section>
    )
}

export default Landing
