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
