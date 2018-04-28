import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Blog } from "./../../model/blog";
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  model: Blog;
  id: number;
  title: string;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.route.params.subscribe(params => this.id = +params['id']);

    if (isNaN(this.id)) {
      this.model = new Blog();
      this.title = "Nuevo blog";
    }
    else {
      this.model = this.blogService.getBlog(this.id);
      this.title = `Editar ${this.model.title}`;
    }
  }

  save(){
    alert(JSON.stringify(this.model));
  }

  ngOnInit() {
  }
}
