export default class CoursesEntity {
    id!: number;
    title: string;
    resume: string;
    createdAt: Date;

    constructor(title: string, resume: string, createdAt: Date) {
        this.title = title;
        this.resume = resume;
        this.createdAt = createdAt;
    }
}