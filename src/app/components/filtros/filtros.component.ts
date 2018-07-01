import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styles: []
})
export class FiltrosComponent implements OnInit {
  @Input() carrefour: boolean;
  constructor() { }

  ngOnInit() {
  }

}
