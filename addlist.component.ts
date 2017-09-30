import { Component } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'department-root',
  template: `<h1>Department List</h1>
            <ul class="items">
            <li (click)="onSelect(add)" *ngFor="let add of departments">
            <span> {{add.id}}</span>{{add.name}}
            </li>
            </ul>
  `
               
  
})
export class AddListComponent {
    constructor(private router:Router){

    }
adds=[
    {"id":1 ,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
]
onSelect(department){
    this.router.navigate(['/add',add.id]);
}
}


