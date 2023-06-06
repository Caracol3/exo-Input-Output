import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {


  @Input() objArray: any[] = [];
  @Output()
   removePerson: EventEmitter<string> = new EventEmitter<string>();



supprimer (id: any) {
  this.removePerson.emit(id);

}

}
