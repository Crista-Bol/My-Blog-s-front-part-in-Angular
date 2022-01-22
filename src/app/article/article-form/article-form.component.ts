import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/shared/article.model';
import { Category } from 'src/app/shared/category.model';


@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styles: [
  ]
})
export class ArticleFormComponent implements OnInit {

  
  constructor(public service:ArticleService) { }
  
  selectedCat:number;
  ngOnInit(): void {
    
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Article();
  }

 
  onSubmit(form: NgForm) {
    if(this.service.formData.id==0)
      this.insertRecord(form);
    else
      this.putRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postArticle().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
  putRecord(form: NgForm) {
    this.service.putArticle().subscribe({
      complete: ()=>{
        this.service.refreshList();
        console.log("Updated");
      }
    });
  }
}
