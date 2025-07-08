import ArticleEntity from "@/app/entities/article.entity";

export default interface ArticleInterface {
    create(article: ArticleEntity): Promise<ArticleEntity>;

    listArticles(): Promise<ArticleEntity[]>;

    getArticle(id: number): Promise<ArticleEntity | null>;

    updateArticle(id: number, article: ArticleEntity): Promise<ArticleEntity>;

    deleteArticle(id: number): Promise<ArticleEntity>;
}