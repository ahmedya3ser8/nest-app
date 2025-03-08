import { Component } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  imports: [],
  templateUrl: './home-blog.component.html',
  styleUrl: './home-blog.component.scss'
})
export class HomeBlogComponent {
  blogs = [
    {imgUrl: '/images/blogs/blog-01.png'},
    {imgUrl: '/images/blogs/blog-02.png'},
    {imgUrl: '/images/blogs/blog-03.png'},
    {imgUrl: '/images/blogs/blog-04.png'}
  ]
}
