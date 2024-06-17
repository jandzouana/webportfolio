import React from 'react'
import "./portfolio.css";
import {Project} from "@/app/interfaces";
import {projects} from "@/app/constants";

interface Props{

}

interface CardProps{
    project: Project;
}

export const Card : React.FC<CardProps> = (props) => {
    const {title, desc, tags, demoLink, github} = props.project;

    const handleDemoClick = () => {
        if(demoLink) window.open(demoLink, "_blank");
    }

    const handleGithubClick = () => {
        if(github) window.open(github, "_blank");
    }

    return (
        <div className="project__container container">
            <h3 className="project__title">{title}</h3>
            <div className="project__tag__container">
                {tags.map((tag, idx) => <div key={idx} className="project__tag">{tag}</div>)}
            </div>
            <div>
                <h3 className="project__subs">Description</h3>
                <p>{desc}</p>
            </div>
            <div className="project__button__container">
                {demoLink && <button className="btn" onClick={handleDemoClick}>View Project</button>}
                {github && <button className="btn" onClick={handleGithubClick}>Github</button>}
            </div>
        </div>
    )
}


const Portfolio : React.FC<Props> = () => {
    return (
        <section className="work container section" id="projects">
            <h2 className="section__title">Projects</h2>
            {/*<div className="work__filters">*/}
            {/*    <span className="work__item"></span>*/}
            {/*    <span className="work__item"></span>*/}
            {/*    <span className="work__item"></span>*/}
            {/*</div>*/}
            <div className="work__container">
                {projects.map((project, idx) => <Card project={project} key={idx}/>)}
            </div>
        </section>
    )
}

export default Portfolio
