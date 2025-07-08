import ArticleInterface from "@/app/repositories/interfaces/article.interface";
import ArticleEntity from "../entities/article.entity";
import {PrismaClient} from "@prisma/client";

export default class ArticleRepository implements ArticleInterface {
    constructor(private prisma: PrismaClient) {
        this.prisma = new PrismaClient();
    }

    async create(article: ArticleEntity): Promise<ArticleEntity> {
        await this.prisma.article.create(article)
        return article;
    }

    async listArticles(): Promise<ArticleEntity[]> {
        return await this.prisma.article.findMany({orderBy: {createdAt: "desc"}});
    }

    async getArticle(id: number): Promise<ArticleEntity | null> {
        const article = await this.prisma.article.findById(id);
        return article ? article : null;
    }

    async updateArticle(id: number, article: ArticleEntity): Promise<ArticleEntity> {
        const existingArticle = await this.prisma.article.findUnique({where: {id}});
        if (!existingArticle) {
            throw new Error("Article not found");
        }
        await this.prisma.article.update({
            where: {id},
            data: article,
        });
        return article;
    }

    async deleteArticle(id: number): Promise<ArticleEntity> {
        const existingArticle = await this.prisma.article.findUnique({where: {id}});
        if (!existingArticle) {
            throw new Error("Article not found");
        }
        await this.prisma.article.delete({where: {id}});
        return existingArticle;
    }

}