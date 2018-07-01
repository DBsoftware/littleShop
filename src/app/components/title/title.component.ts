import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: []
})
export class TitleComponent implements OnInit {
@Input() titulo: string;
  constructor() { }

  ngOnInit() {
  }

}
