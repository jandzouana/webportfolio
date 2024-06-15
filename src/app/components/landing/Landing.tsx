import React from 'react'
import "./landing.css";
import Me from "../../assets/icons/avatar-1.svg";
import Image from "next/image";

const Landing = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <Image src={Me} className="home__img"/>
            </div>
        </section>
    )
}
export default Landing
