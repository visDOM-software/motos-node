import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Blog } from "./../../model/blog";
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Blog;
  id: number;

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) {
    this.route.params.subscribe(params => this.id = +params['id']);
  }

  ngOnInit() {
    this.blog = this.blogService.getBlog(this.id);
  }

}
