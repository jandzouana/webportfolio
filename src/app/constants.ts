import js from './assets/skills/js.svg';
import css from './assets/skills/css3.svg';
import html from './assets/skills/html5.svg';
import code from './assets/skills/code.svg';
import mobile from './assets/skills/mobile.svg';
import art from './assets/skills/palette.svg';
import vr from './assets/skills/vr.svg';
import ts from './assets/skills/typescript.svg';
import tailwind from './assets/skills/tailwind.svg';
import next from './assets/skills/nextjs.svg';
import redux from './assets/skills/redux.svg';
import eth from './assets/skills/ethereum.svg';
import react from './assets/skills/react.svg';

import {Experience, Skill} from "@/app/interfaces";
import {ExpCategory} from "@/app/enums";

export const aboutBlurb : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl. Curabitur est mi, rutrum a libero id, mollis gravida metus. Vivamus fermentum, ex in euismod tincidunt, ex risus porta risus, vel fringilla felis nunc non felis.";


export const skillsList: Skill[] = [
    { name: "Frontend", image: code },
    { name: "JavaScript", image: js },
    { name: "TypeScript", image: ts },
    { name: "React", image: react },
    { name: "CSS", image: css },
    { name: "Tailwind", image: tailwind },
    { name: "Next", image: next },
    { name: "Redux", image: redux },
    { name: "HTML", image: html },
    { name: "Mobile", image: mobile },
    { name: "Design", image: art },
    { name: "Web3", image: eth },
    { name: "XR", image: vr },
];

export const experienceList: Experience[] = [
    {
        category: ExpCategory.work,
        year: "2023 - present",
        location: "CompetesTV",
        title: "Senior Software Engineer",
        desc: "• Developed key features and intuitive UI for Competes Studio app using React, Tailwind CSS, Next.js, and JavaScript, increasing engagement and user-generated content on the CompetesTV app\n• Managed client-side development for React, iOS and Android apps, conducting code reviews, tracking tasks and deadlines, and integrating SDKs, contributing to successful iOS app launch\n• Provided strategic leadership in design decisions for our apps by facilitating collaborative meetings, creating mockups, and reviewing Figma designs, enhancing user experience and increasing customer satisfaction"
    },
    {
        category: ExpCategory.work,
        year: "2018 - present",
        location: "AlcaCruz Inc.",
        title: "Senior Software Engineer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies."
    },
    {
        category: ExpCategory.education,
        year: "2013 - 2017",
        location: "Santa Clara University",
        title: "BS Computer Science, BA Studio Art",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies."
    }
]
