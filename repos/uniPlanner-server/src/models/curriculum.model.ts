import { Course } from "./couese.model";

export interface Curriculum {
    id: string;
    courses: Course[];
    username: string;
}