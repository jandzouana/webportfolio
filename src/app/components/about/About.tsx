import React, { useState, useEffect } from 'react'
import "./about.css";
import {skillsList} from "@/app/constants";
import Image from "next/image";

interface Props {}

const About : React.FC<Props> = () => {
    const [skills, setSkills] = useState<React.ReactNode[]>([]);

    const makeSkillsGrid = () => {
        const list = skillsList.map((skill, idx) => <div className={"skill__box"} key={idx}>
            {skill.image && <Image className="skill__logo" src={skill.image} alt="skill-image"/>}
            {!skill.image && <div className="skill__placeholder"></div>}
            <div className="skill__name">{skill.name}</div>
        </div>)

        setSkills(list);
    }

    useEffect(()=>{
        makeSkillsGrid();
    }, [])

    return (
        <section className="container about section" id="skills">
            <h2 className="section__title">About</h2>
            <p className="container skills__intro">
            With over <span>7 years</span> of professional experience, I am passionate about <span>frontend</span> development and dedicated to crafting immersive, intuitive user experiences that captivate and delight. My expertise in modern web technologies such as <span>React, Next.js,</span> and <span>Tailwind CSS</span> enables me to create responsive and performant interfaces. Beyond web development, I have honed my skills in <span>mobile</span> app development, delivering cutting-edge applications for both iOS and Android. Additionally, I explore innovative solutions in <span>VR</span> and <span>AR</span>, pushing the boundaries of interactive entertainment. My experience also extends to <span>AI</span>, where I leverage advanced technologies to enhance user engagement and functionality in applications. Check out some of the technologies I have worked with below.
            </p>
            <div className="skills__container container">
                {skills}
            </div>
        </section>
    )
}
export default About
