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
                As someone with over <span>6 years</span> of professional work experience, I have developed a great passion for <span>frontend</span> development. I thrive on crafting immersive and intuitive user experiences that captivate and delight. With a deep understanding of modern web technologies like <span>React, Next.js,</span> and <span>Tailwind CSS</span>, I meticulously craft responsive and performant interfaces. My expertise extends beyond the web, as I have honed my skills in <span>mobile</span> app development to create applications for iOS and Android to display cutting-edge tech. Additionally, I have experience in the realm of <span>VR</span> and <span>AR</span> exploring innovative ways to create immersive and interactive experiences that push the boundaries of entertainment. Check out some of the technologies I've worked with below.
            </p>
            <div className="skills__container container">
                {skills}
            </div>
        </section>
    )
}
export default About
