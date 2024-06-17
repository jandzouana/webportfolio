import React from 'react'
import "./portfolio.css";
import {projects} from "@/app/constants";
import {Card} from "@/app/components/portfolio/Card";

interface Props{

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
