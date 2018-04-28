import { Component, OnInit } from '@angular/core';
import { Blog } from "./../../model/blog";
import { BlogService } from '../blog.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[];
  user: SocialUser;

  constructor(private blogService: BlogService,
    private socialAuthService: AuthService) {

    socialAuthService.authState.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.blogs = this.blogService.getBlogsByUser(this.user.email);
  }
}
