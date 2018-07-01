import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styles: []
})
export class BlankComponent implements OnInit {
  @Input() marginRow: boolean;
  @Input() height: number;

  constructor() { }

  ngOnInit() {
  }

}
