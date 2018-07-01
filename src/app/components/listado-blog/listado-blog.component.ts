import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-blog',
  templateUrl: './listado-blog.component.html',
  styles: []
})
export class ListadoBlogComponent implements OnInit {
  @Input() blogs;
  constructor() { }

  ngOnInit() {
  }

}
