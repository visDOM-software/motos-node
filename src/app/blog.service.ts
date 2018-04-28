import { Injectable } from '@angular/core';
import { Blog } from "./../model/blog";

@Injectable()
export class BlogService {

  blog: Blog[] = [{
    id: 1,
    datePosted: "Posted on January 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "Edwin Arias"
  }, {
    id: 2,
    datePosted: "Posted on January 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "Edwin Arias"
  }, {
    id: 3,
    datePosted: "Posted on January 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "Edwin Arias"
  }, {
    id: 4,
    datePosted: "Posted on January 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    img: "http://placehold.it/750x300",
    title: "prueba 1",
    author: "Edwin Arias"
  }]

  constructor() { }

  getBlogs() {
    return this.blog;
  }

  getBlog(name) {
    return this.blog[0];
  }
}
