import React from 'react';
import './portfolio.css';
import { Project } from '@/app/interfaces';
import ProjectImage from './ProjectImage';


interface CardProps {
    project: Project;
}

export const Card: React.FC<CardProps> = (props) => {
    const { title, desc, tags, demoLink, github, thumbs, purpose, problem } = props.project;

    const handleDemoClick = () => {
        if (demoLink) window.open(demoLink, '_blank');
    };

    const handleGithubClick = () => {
        if (github) window.open(github, '_blank');
    };

    return (
        <div className="project__container container">
            <div className="project__text__container">
                <h3 className="project__title">{title}</h3>
                <div className="project__tag__container">
                    {tags.map((tag, idx) => (
                        <div key={idx} className="project__tag">
                            {tag}
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="project__subs">Description</h3>
                    <p>{desc}</p>
                </div>
                {purpose && <div>
                    <h3 className="project__subs">Purpose</h3>
                    <p>{purpose}</p>
                </div>}
                {problem && <div>
                    <h3 className="project__subs">Problem to Solution</h3>
                    <p>{problem}</p>
                </div>}
                <div className="project__button__container">
                    {demoLink && (
                        <button className="btn" onClick={handleDemoClick}>
                            View Project
                        </button>
                    )}
                    {github && (
                        <button className="btn" onClick={handleGithubClick}>
                            Github
                        </button>
                    )}
                </div>
            </div>
            <ProjectImage thumbs={thumbs} />
        </div>
    );
};
