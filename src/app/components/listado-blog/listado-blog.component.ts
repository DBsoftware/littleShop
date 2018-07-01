import { Component, OnInit, Input } from '@angular/core';
import { iBlog } from '../../models/models.index';
import { BlogService } from '../../providers/services.index';

@Component({
  selector: 'app-listado-blog',
  templateUrl: './listado-blog.component.html',
  styles: []
})
export class ListadoBlogComponent implements OnInit {
  @Input() blogs: iBlog[];
  thisWay = false;
  @Input() total: number;
  loading = true;
  constructor(public blogSrv: BlogService) {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit() {

  }

}
