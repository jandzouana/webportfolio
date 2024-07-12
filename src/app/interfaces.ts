import { StaticImageData } from 'next/image';
import {ExpCategory} from "@/app/enums";

export interface Skill {
    name: string;
    image?: StaticImageData | null;
}

export interface ExperienceType {
    category: ExpCategory;
    year: string;
    title: string;
    location: string;
    desc: string;
}

export interface Project {
    title: string;
    tags: string[];
    demoLink: string;
    github?: string;
    desc: string;
    purpose?: string;
    problem?: string;
    thumbs?: StaticImageData[] | null;
    responsibilities?: string;
}

export interface Status {
    name: string;
    subject: string;
    email: string;
    message: string;
}
