import React from 'react'
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import Image from "next/image";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <button className="resume__button btn">Resume</button>
            <a href="https://linkedin.com/in/jandzouana" className="home__social-link" target="_blank">
                <Image className={"social-icons"} src={linkedin}/>
            </a>
            <a href="https://github.com/jandzouana" className="home__social-link" target="_blank">
                <Image className={"social-icons"} src={github}/>
            </a>
        </div>
    )
}

export default HeaderSocials
