import { Injectable } from '@angular/core';
import { Article } from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = [];
  articlesDeleted: Article[] = [];

  constructor() {
    this.articles = this.getFromLocalStorage()
  }

  /**
   * Ajout d'un article
   * @param article Article à supprimer
   */
  createArticle(article: Article): void{
    this.articles.push(article);
  }

  /**
   * Suppréssion d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article){
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex( x => x.id === article.id);
    // Supprssion de l'article du tableau
    this.articles.splice(index, 1);
    // ajouter l'article supprimé au tableau des articles supprimés
    this.articlesDeleted.push(article);
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

    restoreArticle(article: Article){
      /* supprimer du tableau deleted pour rajouter dans le tableau normal */
       // Récupération de l'index de l'article à supprimer
    const index = this.articlesDeleted.findIndex( x => x.id === article.id);
    // Supprssion de l'article du tableau
    this.articlesDeleted.splice(index, 1);
    // ajouter l'article supprimé au tableau des articles supprimés
    this.articles.push(article);
    }
}

