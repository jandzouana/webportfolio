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

import {Skill} from "@/app/interfaces";

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
