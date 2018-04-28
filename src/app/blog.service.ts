import { Injectable } from '@angular/core';
import { Blog } from "./../model/blog";

@Injectable()
export class BlogService {

  blog: Blog[] = [{
    id: 1,
    datePosted: "Posted on January 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "Edwin Arias"
  }, {
    id: 2,
    datePosted: "Posted on January 1",
    content: "Angularscript.com provides latest, free AngularJS  modules, components, directives, services, filters, plugins and other related resources for modern web and mobile development.",
    summary: "USEFUL ANGULARJS RESOURCES",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "eaar89@gmail.com"
  }, {
    id: 3,
    datePosted: "Posted on January 1",
    content: '<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">    <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">    <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/agate.min.css" rel="stylesheet">    <script src="https://cdn.bootcss.com/ace/1.2.8/ace.js"></script>    <script src="https://cdn.bootcss.com/marked/0.3.6/marked.min.js"></script>    <script src="https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js"></script',
    summary: "Use markdown-editor component",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "eaar89@gmail.com"
  }, {
    id: 4,
    datePosted: "Posted on January 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "eaar89@gmail.com"
  }]

  constructor() { }

  getBlogs() {
    return this.blog;
  }

  getBlogsByUser(userId) {
    return this.blog.filter(x => x.author == userId);
  }

  getBlog(id) {
    return this.blog.find(x => x.id === id);
  }
}
