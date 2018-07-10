import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../providers/blog.service';
import { iBlog } from '../../models/models.index';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {
  blog: iBlog;
  constructor(public activatedRoute: ActivatedRoute, private blogService: BlogService) {
    this.activatedRoute.params.subscribe(p => {
      this.blogService.obtener(p['id']).subscribe(r => this.blog = r);
    });
  }

  ngOnInit() {
  }

}
