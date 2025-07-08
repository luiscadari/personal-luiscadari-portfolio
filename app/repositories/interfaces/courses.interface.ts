import CoursesEntity from "@/app/entities/courses.entity";

export default interface CoursesInterface {
    create(article: CoursesEntity): Promise<CoursesEntity>;

    listArticles(): Promise<CoursesEntity[]>;

    getArticle(id: number): Promise<CoursesEntity | null>;

    updateArticle(id: number, article: CoursesEntity): Promise<CoursesEntity>;

    deleteArticle(id: number): Promise<CoursesEntity>;
}