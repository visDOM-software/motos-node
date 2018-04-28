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
  name: string;

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) {
    this.route.params.subscribe(params => this.name = params['name']);
  }

  ngOnInit() {
    this.blog = this.blogService.getBlog(this.name);
  }

}
