import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { opt } from '../../dataSitio/opcionesModal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {
  @Input() show: string;
  @Output() showChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() carrefour: string;
  @Output() carrefourChange: EventEmitter<string> = new EventEmitter<string>();
  options = opt;
  constructor() {}

  ngOnInit() {
  }

  closeModal() {
    this.show = 'fadeOut';

    setTimeout(() => {
      this.show = 'd-none';
      this.showChange.emit(this.show);
      this.carrefour = '';
      this.carrefourChange.emit(this.carrefour);
    }, 1000 );
  }

}
