import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent {
  @Input()
  message:any={};
  @Input()
  index = -1;

  @Output()
  delete: EventEmitter<number>=new EventEmitter<number>();
  onDelete() {
    this.delete.emit(this.indexg)
  }
}
