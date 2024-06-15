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
                <Image src={Me} className="home__img"/>
            </div>
            <h1 className="home__name">Jessica Andzouana</h1>
            <span className="home__education">I'm  a frontend developer</span>
            <HeaderSocials/>

            <ScrollDown/>
        </section>
    )
}

export default Landing
