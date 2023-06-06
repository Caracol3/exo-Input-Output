import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {


  objArray = [
    { id:1 , name: 'Richard', age: 49, hobby: 'food' },
    { id:2 , name: 'Christophe', age: 42, hobby: 'golf' },
    { id:3 , name: 'Matthieu', age: 30, hobby: 'racist joke' },
    { id:4 , name: 'Olivier', age: 43, hobby: 'dance' },
    { id:5 , name: 'Me', age: 38, hobby: 'music' },
  ]

  onRemovePeople(event: any) {
    this.objArray = this.objArray.filter((person) => person.id !== event);
  }
}
