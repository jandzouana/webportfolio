import React from 'react'
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import ig from "../../assets/icons/instagram.svg";
import Image from "next/image";

const LandingSocials = () => {
    return (
        <div className="landing__socials">
            <a href="/resume.pdf" className="resume__button btn" download>Resume</a>
            <div>
                <a href="https://linkedin.com/in/jandzouana" className="home__social-link" target="_blank">
                    <Image className={"social-icons"} alt="linkedin" src={linkedin}/>
                </a>
                <a href="https://github.com/jandzouana" className="home__social-link" target="_blank">
                    <Image className={"social-icons"} alt="github" src={github}/>
                </a>
                <a href="https://instagram.com/animatedjess" className="home__social-link" target="_blank">
                    <Image className={"social-icons"} alt="instagram" src={ig}/>
                </a>
            </div>
        </div>
    )
}

export default LandingSocials
