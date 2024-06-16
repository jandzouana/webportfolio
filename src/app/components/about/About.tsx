import React, { useState, useEffect } from 'react'
import "./about.css";
import {skillsList} from "@/app/constants";
import Image from "next/image";

interface Props {}

const About : React.FC<Props> = () => {
    const [skills, setSkills] = useState([]);

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
        <section className="container about section" id="about">
            <h2 className="section__title">Skills</h2>
            <div className="skills__container container">
                {skills}
            </div>
        </section>
    )
}
export default About
