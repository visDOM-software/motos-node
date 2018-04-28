import { Component, OnInit } from '@angular/core';
import { Blog } from './../../model/blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  model: Blog = { text: "<h1>asjkdhajskdhjakshdjkashd<h1>", summary:"asdjahskjd" };

  constructor() { }

  ngOnInit() {
  }

}
