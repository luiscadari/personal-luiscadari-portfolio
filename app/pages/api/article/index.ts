import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import ArticleRepository from "@/app/repositories/article.repository";
import ArticleEntity from "@/app/entities/article.entity";

const articleRepository = new ArticleRepository(PrismaClient)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET": {
            if (req.query.id) {
                const id = parseInt(req.query.id as string, 10);
                if (isNaN(id)) {
                    res.status(400).json({error: "Invalid article ID"});
                    return;
                }
                const article = await articleRepository.getArticle(id);
                if (!article) {
                    res.status(404).json({error: "Article not found"});
                    return;
                }
                res.status(200).json(article);
                return;
            }
            const articles = await articleRepository.listArticles();
            if (!articles || articles.length === 0) {
                res.status(404).json({error: "No articles found"});
                return;
            }
            res.status(200).json(articles);
            return;
        }
        case "POST": {
            const {title, content, authorId} = req.body;

            if (!title || !content || !authorId) {
                res.status(400).json({error: "All fields are required"});
                return;
            }

            const newArticle = await articleRepository.create({
                title, content, authorId,
            } as ArticleEntity);
            res.status(200).json(newArticle);
            return;
        }
        case "PUT": {
            const article = req.body as ArticleEntity;
            try {
                await articleRepository.updateArticle(article.id, article)
                res.status(200).json(article);
                return;
            } catch (e) {
                res.status(500).json(e);
                return;
            }
        }
        case "DELETE": {
            const {id} = req.query;
            if (!id || typeof id !== "string") {
                res.status(400).json({error: "Article ID is required"});
                return;
            }
            const articleId = parseInt(id);
            if (isNaN(articleId)) {
                res.status(400).json({error: "Invalid article ID"});
                return;
            }
            try {
                const deletedArticle = await articleRepository.deleteArticle(articleId);
                res.status(200).json(deletedArticle);
                return;
            } catch (e) {
                res.status(500).json(e);
                return;
            }
        }
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}