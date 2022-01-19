import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/shared/article.model';


@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styles: [
  ]
})
export class ArticleFormComponent implements OnInit {

  constructor(public service:ArticleService) { }

  cats = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ];

  ngOnInit(): void {
    
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Article();
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
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
}
