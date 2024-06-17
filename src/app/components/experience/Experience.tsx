import React from 'react';
import "./experience.css";
import { experienceList } from "@/app/constants";
import { ExpCategory } from "@/app/enums";
import { Experience } from "@/app/interfaces";

const convertNewlinesToBreaks = (text: string) => {
    return text.split('\n').map((part, index) => (
        <React.Fragment key={index}>
            {part}
            <br />
        </React.Fragment>
    ));
};

function Card(props: { category: ExpCategory, year: string, title: string, desc: string, location: string }) {
    return (
        <div className="timeline__item">
            <i className={props.category === ExpCategory.work ? "icon-briefcase" : "icon-graduation"}></i>
            <div className="timeline__double">
                <h3 className="timeline__title">{props.title}</h3>
                <span className="timeline__data">{` (${props.year})`}</span>
            </div>
            <h4>{props.location}</h4>
            <p className="timeline__text">{convertNewlinesToBreaks(props.desc)}</p>
        </div>
    );
}

const Experience = () => {
    return (
        <section className="experience container section" id="experience">
            <h2 className="section__title">Education & Experience</h2>
            <div className="timeline">
                {experienceList.map((val: Experience, id: number) => (
                    <Card
                        key={id}
                        category={val.category}
                        title={val.title}
                        year={val.year}
                        desc={val.desc}
                        location={val.location}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
