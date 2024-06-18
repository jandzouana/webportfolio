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
import p5 from './assets/skills/p5js.svg';
import concept1 from './assets/projects/concept1.png';
import concept2 from './assets/projects/concept2.png';
import concept3 from './assets/projects/concept3.png';
import concept4 from './assets/projects/concept4.png';
import concept5 from './assets/projects/concept5.png';
import concept6 from './assets/projects/concept6.png';
import concept7 from './assets/projects/concept7.png';
import art1 from './assets/projects/art1.jpg';
import word1 from './assets/projects/word1.png';
import word2 from './assets/projects/word2.png';
import port1 from './assets/projects/port1.png';
import port2 from './assets/projects/port2.png';

import {ExperienceType, Project, Skill} from "@/app/interfaces";
import {ExpCategory} from "@/app/enums";

export const aboutBlurb : string = "I'm a passionate and versatile software engineer with a unique blend of expertise in computer science and art. I specialize in crafting innovative, user-friendly applications that prioritize aesthetics and exceptional user experiences. Currently, I am working at CompetesTV where I lead the development of a web app that empowers content creators.  Welcome to my portfolio, where technology and creativity converge.";// "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl. Curabitur est mi, rutrum a libero id, mollis gravida metus. Vivamus fermentum, ex in euismod tincidunt, ex risus porta risus, vel fringilla felis nunc non felis.";


export const skillsList: Skill[] = [
    { name: "Frontend", image: code },
    { name: "JavaScript", image: js },
    { name: "TypeScript", image: ts },
    { name: "React", image: react },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Tailwind", image: tailwind },
    { name: "Next", image: next },
    { name: "Redux", image: redux },
    { name: "Mobile", image: mobile },
    { name: "Design", image: art },
    { name: "P5.js", image: p5 },
    { name: "Web3", image: eth },
    { name: "XR", image: vr },
];

export const experienceList: ExperienceType[] = [
    {
        category: ExpCategory.work,
        year: "2023 - present",
        location: "CompetesTV",
        title: "Senior Software Engineer",
        desc: "• Develop key features and intuitive UI for Competes Studio app using React, Tailwind CSS, Next.js, and JavaScript, increasing engagement and user-generated content on the CompetesTV app\n• Manage client-side development for React, iOS and Android apps, conducting code reviews, tracking tasks and deadlines, and integrating SDKs, contributing to a successful iOS app launch\n• Provide strategic leadership in design decisions for our apps by facilitating collaborative meetings, creating mockups, and reviewing Figma designs, enhancing user experience and increasing customer satisfaction"
    },
    {
        category: ExpCategory.work,
        year: "2018 - present",
        location: "AlcaCruz Inc.",
        title: "Senior Software Engineer",
        desc: "• Architected and developed the cutting-edge Multiview and VR SDK, enabling a low-latency 8K VR streaming service that directly contributed to securing high-profile clients, including the telecommunications giant KT\n• Implemented web & mobile sample projects to demonstrate the usage of the VR and Multiview video player SDKs, facilitating a seamless adoption of the tech"
    },
    {
        category: ExpCategory.work,
        year: "2017 - 2018",
        location: "Sturfee Inc.",
        title: "Software Engineering Intern",
        desc: "• Developed robust Unity3D C# scripts that integrated game mechanics, physics simulations, and intuitive UI, ensuring a smooth and engaging user experience of an innovative, location-based, cross-platform AR game\n• Created 2D and 3D art assets using Illustrator and Photoshop for the app UI and game environment, elevating the app's UI and immersive game environment, increasing user engagement"
    },
    {
        category: ExpCategory.education,
        year: "2013 - 2017",
        location: "Santa Clara University",
        title: "BS Computer Science, BA Studio Art",
        desc: "Graduated from Santa Clara University with a double major in Computer Science and Studio Art. This unique combination provided a robust foundation in software development and technical problem-solving, complemented by creative skills in visual design and artistic expression. Developed a versatile skill set, blending analytical thinking with artistic creativity, preparing for innovative contributions in both tech and creative industries."
    }
];

export const projects : Project[] = [
    {
        title: "Concept AI",
        desc: "Concept AI is an intuitive, AI-powered application that enables users to create detailed character sheets in various styles, with advanced features such as positive and negative prompt generation, resolution settings, and scaling.",
        purpose: " To provide a versatile tool for artists, writers, and game developers to generate character concepts efficiently and creatively.",
        problem: "Traditional character creation can be time-consuming and require multiple tools. Concept AI simplifies this process by integrating advanced settings like textual inversion, number of steps, LoRAs, VAE, and scaling with denoise, all in one user-friendly app.",
        tags: ["Frontend", "AI", "React", "TypeScript", "Tailwind CSS", "Design", "AdobeXD"],
        demoLink: "https://concept-ai-tau.vercel.app/",
        thumbs: [concept1, concept5, concept2, concept3, concept4, concept6, concept7]
    },
    {
        title: "WordFlex",
        desc: "WordFlex is a smart, AI-powered translation app designed for context-aware translations, offering various tones, dialects, and levels of formality. Favicon provided by Freepik",
        purpose: "To assist multilingual speakers in achieving accurate translations tailored to different contexts and situations.",
        problem: "Standard translation tools often fail to consider the nuances of language use in different scenarios. As a trilingual speaker, I recognized the need for an app that could provide more context-sensitive translations, ensuring better communication across languages.",
        tags: ["Frontend", "AI", "React", "TypeScript", "CSS", "Design", "AdobeXD", "Redux"],
        github: "https://github.com/jandzouana/translator",
        demoLink: "https://translator-orpin.vercel.app/",
        thumbs: [word1, word2]
    },
    {
        title: "Coding Portfolio",
        desc: "This project showcases the website you are currently viewing, built using modern web technologies and pure CSS for precise control over the design.",
        purpose: "To create a personal portfolio that demonstrates my web development skills and aesthetic sense. The challenge was to design a visually appealing and responsive website without relying on frameworks, ensuring complete customization and uniqueness. Thanks to Cryptical Coder's tutorial for providing design inspiration and foundational guidance.",
        tags: ["Frontend", "React", "TypeScript", "CSS"],
        demoLink: "https://webportfolio-tau.vercel.app/",
        github: "https://github.com/jandzouana/webportfolio",
        thumbs: [port2, port1]
    },
    {
        title: "Art Portfolio",
        desc: "This project is my artistic portfolio, showcasing a collection of my artwork and animations created over the years, built with HTML, vanilla JS, CSS, and SASS.",
        purpose: "The purpose is to display my artistic talents and development skills, highlighting my proficiency in creating visually engaging content. While modern technologies offer many conveniences, I aimed to demonstrate my ability to use fundamental frontend development tools to create a polished and functional art portfolio.",
        tags: ["SASS", "HTML", "JavaScript", "CSS", "Design"],
        github: "https://github.com/jandzouana/portfolio",
        demoLink: "https://jandzouana.github.io/portfolio/",
        thumbs: [art1]
    }
]
