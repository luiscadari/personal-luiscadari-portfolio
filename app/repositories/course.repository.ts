import CoursesInterface from "@/app/repositories/interfaces/courses.interface";
import CoursesEntity from "../entities/courses.entity";
import {PrismaClient} from "@prisma/client";

export default class CourseRepository implements CoursesInterface {
    constructor(private prisma: PrismaClient) {
        this.prisma = new PrismaClient();
    }

    async create(course: CoursesEntity): Promise<CoursesEntity> {
        await this.prisma.create(course);
        return course
    }

    async listArticles(): Promise<CoursesEntity[]> {
        return await this.prisma.courses.findMany({orderBy: {createdAt: "desc"}});
    }

    async getArticle(id: number): Promise<CoursesEntity | null> {
        return await this.prisma.courses.findUnique({where: {id}})
            .then((course: CoursesEntity) => course ? course : null);
    }

    async updateArticle(id: number, course: CoursesEntity): Promise<CoursesEntity> {
        const existingCourse = await this.prisma.courses.findUnique({where: {id}});
        if (!existingCourse) {
            throw new Error("Course not found");
        }
        await this.prisma.courses.update({
            where: {id},
            data: course,
        });
        return course
    }

    async deleteArticle(id: number): Promise<CoursesEntity> {
        const existingCourse = await this.prisma.courses.findUnique({where: {id}});
        if (!existingCourse) {
            throw new Error("Course not found");
        }
        return await this.prisma.courses.delete({where: {id}})
            .then((course: CoursesEntity) => course);
    }

}