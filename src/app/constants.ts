import db from './assets/skills/db.svg';
import hexagon from './assets/skills/hex.svg';
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
import cc1 from './assets/projects/cc1.png';
import cc2 from './assets/projects/cc2.png';
import cc3 from './assets/projects/cc3.png';
import cc4 from './assets/projects/cc4.png';
import cc5 from './assets/projects/cc5.png';
import cc6 from './assets/projects/cc6.png';
import dalle1 from './assets/projects/dalle1.png';
import dalle2 from './assets/projects/dalle2.png';
import mastery from './assets/projects/mastery1.jpg';
import mastery2 from './assets/projects/mastery2.jpg';
import mastery3 from './assets/projects/mastery3.jpg';
import mastery4 from './assets/projects/mastery4.jpg';
import mastery5 from './assets/projects/mastery5.jpg';

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
    { name: "Next.js", image: next },
    { name: "Redux", image: redux },
    {name: "MongoDB", image: db},
    {name: "Node.js", image: hexagon},
    { name: "Mobile", image: mobile },
    { name: "Design", image: art },
    { name: "P5.js", image: p5 },
    { name: "React Native", image: react },
    { name: "Web3", image: eth },
    { name: "XR", image: vr },
];

export const experienceList: ExperienceType[] = [
    {
        category: ExpCategory.work,
        year: "2023 - present",
        location: "CompetesTV",
        title: "Senior Software Engineer",
        desc: "• Spearheaded end-to-end development of Competes Studio's user-facing features using React, transforming Figma prototypes into production-ready interfaces through iterative design reviews\n• Created performant UI components that streamlined content submission workflows, reducing redundant code by 40% through strategic component library implementation with Tailwind CSS\n• Developed and launched a web player feature, boosting the app's marketability, elevating content watch time, and optimizing content management processes.\n• Championed performance enhancements through bundle size optimization and strategic caching, reducing average page load times for key user journeys"
    },
    {
        category: ExpCategory.work,
        year: "2018 - 2023",
        location: "AlcaCruz Inc.",
        title: "Senior Software Engineer",
        desc: "• Pioneered the client-side architecture of the groundbreaking SuperStream SDK, enabling ultra-high quality, low-latency 8K VR streaming, which directly led to partnerships with major telecom companies like KT\n• Designed and implemented responsive, user-friendly interfaces for the Multiview SDK powering CompetesTV's video competition platform using React, JavaScript, and CSS\n• Engineered polished web and mobile sample projects showcasing video streaming SDK capabilities, significantly improving client onboarding and adoption rates\n• Led frontend best practices implementation through code reviews, documentation, and mentoring, focusing on performance optimization and modular component design"
    },
    {
        category: ExpCategory.work,
        year: "2017 - 2018",
        location: "Sturfee Inc.",
        title: "Software Engineering Intern",
        desc: "• Developed core game mechanics and UI for a location-based MR/AR game on Android and iOS using Unity and C#\n• Engineered seamless integration between frontend systems and API services, enhancing real-time data flow\n• Created visually appealing 2D and 3D art assets using Illustrator and Photoshop, elevating the game's aesthetic appeal\n• Implemented physics-based interactions and responsive user interfaces, significantly improving player engagement"
    },
    {
        category: ExpCategory.education,
        year: "2013 - 2017",
        location: "Santa Clara University",
        title: "BS Computer Science, BA Studio Art",
        desc: "Graduated from Santa Clara University with a double major in Computer Science and Studio Art. This distinctive combination laid a strong foundation in software development and technical problem-solving, while also fostering creative skills in visual design and artistic expression. I cultivated a versatile skill set that harmonizes analytical thinking with artistic creativity, preparing me to make innovative contributions in both technology and the creative sectors."
    }];

export const projects : Project[] = [
    {
        title: "Mastery",
        demoLink: "https://testflight.apple.com/join/2WW7EpNK",
        thumbs: [mastery, mastery2, mastery3, mastery4, mastery5],
        tags: ["React Native", "iOS", "Android", "Product Development", "Design"],
        desc: "Mastery is the ultimate habit tracker designed to help you achieve mastery in any skill. With an intuitive interface, personalized skill screens, and visual progress tracking, Mastery turns practice into a fun and motivating journey towards expertise.",
        purpose: "To provide a personalized learning experience that motivates users to stay committed to their goals and achieve mastery in any skill."
    },
    {
        title: "CompetesTV",
        desc: "CompetesTV is an innovative video competition iOS app that enables creators to showcase their talents, connect with a wider audience, and compete for fame and prizes.",
        purpose: "To establish a platform where creators can participate in short-form video competitions.",
        responsibilities: "I am primarily responsible for managing and developing features for CompetesStudio, the companion React app for content creators. The app allows creators to create contests, upload videos, and view comments. Additionally, I assist with the development and management of the main iOS app.",
        problem: "Providing a smooth user experience with concurrent video streaming has been a challenge for developers over the years. This app leverages AlcaCruz's multiview technology to offer users a new way to engage with short-form content, while also providing benefits such as increased discoverability and the opportunity to win prizes.",
        tags: ["Frontend", "iOS", "React", "Next.js", "TypeScript", "Tailwind CSS", "Swift"],
        demoLink: "https://studio.competes.tv",
        thumbs: [cc1, cc2, cc3, cc4, cc5, cc6]
    },
    {
        title: "Concept AI",
        desc: "Concept AI is an intuitive, AI-powered application that enables users to create detailed character sheets in various styles, with advanced features such as positive and negative prompt generation, resolution settings, and scaling.",
        purpose: " To provide a versatile tool for artists, writers, and game developers to generate character concepts efficiently and creatively.",
        problem: "Traditional character creation can be time-consuming and require multiple tools. Concept AI simplifies this process by integrating advanced settings like textual inversion, number of steps, LoRAs, VAE, and scaling with denoise, all in one user-friendly app.",
        tags: ["Frontend", "AI", "React", "Next.js", "TypeScript", "Tailwind CSS", "Design", "AdobeXD", "Product Development" ],
        demoLink: "https://concept-ai-tau.vercel.app/",
        thumbs: [concept1, concept5, concept2, concept3, concept4, concept6, concept7]
    },
    {
        title: "DALL-E 2.0",
        desc: "A clone of OpenAI's DALL-E, a popular image generating platform.",
        purpose: "To learn the tools needed to create an image generation platform.",
        tags: ["Fullstack", "MERN", "AI", "Vite", "Typescript", "React", "Tailwind CSS", "Node.js", "MongoDB"],
        demoLink: "https://ai-image-gen-orcin.vercel.app/",
        thumbs: [dalle1, dalle2]
    },
    {
        title: "WordFlex",
        desc: "WordFlex is a smart, AI-powered translation app designed for context-aware translations, offering various tones, dialects, and levels of formality. Favicon provided by Freepik",
        purpose: "To assist multilingual speakers in achieving accurate translations tailored to different contexts and situations.",
        problem: "Standard translation tools often fail to consider the nuances of language use in different scenarios. As a trilingual speaker, I recognized the need for an app that could provide more context-sensitive translations, ensuring better communication across languages.",
        tags: ["Frontend", "Product Development", "AI", "React", "Next.js", "TypeScript", "CSS", "Design", "AdobeXD", "Redux"],
        github: "https://github.com/jandzouana/translator",
        demoLink: "https://translator-orpin.vercel.app/",
        thumbs: [word1, word2]
    },
    {
        title: "Coding Portfolio",
        desc: "This project showcases the website you are currently viewing, built using modern web technologies and pure CSS for precise control over the design.",
        purpose: "To create a personal portfolio that demonstrates my web development skills and aesthetic sense. The challenge was to design a visually appealing and responsive website without relying on frameworks, ensuring complete customization and uniqueness. Thanks to Cryptical Coder's tutorial for providing design inspiration and foundational guidance.",
        tags: ["Frontend", "React", "TypeScript", "CSS", "Next.js"],
        demoLink: "https://coderjess.com/",
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
