import { Injectable } from '@angular/core';
import { Article } from './article.model';
import {HttpClient} from '@angular/common/http';
import { firstValueFrom, map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  formData: Article= new Article();
  readonly baseURL = 'https://localhost:44310/Articles/GetAll';
  list : Article[];

  constructor(private http:HttpClient) { }

  postArticle() {
    return this.http.post(this.baseURL, this.formData);
  }
  putArticle() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }
  deleteArticle(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  async refreshList() {
    console.log("refreshed");
    
    this.http.get(this.baseURL).subscribe((res:any)=>{
      this.list=res.data;
    });
  }

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.baseURL);
  }
  
  private extractData(res: any) {
    let body = res;
    console.log('this is :');
    return body;
  } 
}
