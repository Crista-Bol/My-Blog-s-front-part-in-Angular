import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles:[]
})
export class ArticleComponent implements OnInit {

  constructor(public service:ArticleService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  // populateForm(selectedRecord) {
	//   this.service.formData = Object.assign({}, selectedRecord);
  // }

}
