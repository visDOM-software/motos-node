import { Component, OnInit } from '@angular/core';
import { Blog } from "./../../model/blog";
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.css']
})
export class BlogSummaryComponent implements OnInit {

  blogs:Blog[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  goToBlog(){
    
  }
}
