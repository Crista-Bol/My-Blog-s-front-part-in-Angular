import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles:[]
})
export class ArticleComponent implements OnInit {

  constructor(public service:ArticleService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.getCats();
  }
  onDelete(id:number){
    this.service.deleteArticle(id).subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      },
      complete: () => {this.service.refreshList();}
    });
  }
  populateForm(selectedArt:Article){
    this.service.formData=Object.assign({},selectedArt);
    
  }

}
