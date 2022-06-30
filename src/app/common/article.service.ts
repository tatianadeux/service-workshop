import { Injectable } from '@angular/core';
import { Article } from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  article: Article = new Article();
  articles: Article[] = [];

  constructor() { }

  createArticle(article: Article): void{
    this.articles.push(this.article);
  }

  /**
   * Suppréssion d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article){
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex( x => x.id === article.id);
    // Suppréssion de l'article du tableau
    this.articles.splice(index, 1);
  }
   /**
   * Récupération du tableau d'articles stocké dans le local storage
   */
    getFromLocalStorage(): Article[] {
      // Récupération des artciles en format 'string'
      const stringData = localStorage.getItem('articles');
      // Converstion des données de type 'string' en objet Javascript
      const articles: Article[] = JSON.parse(stringData);

      return articles;
    }
}

