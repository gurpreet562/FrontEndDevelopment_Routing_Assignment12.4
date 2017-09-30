import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  
  template: `<h1>You selected addition with id= {{additionId}}</h1>`
               
  
})
export class DepartmentDetailComponent implements OnInit{
  public additionId;
constructor(private route:ActivatedRoute){

}
ngOnInit(){
 let id= this.route.snapshot.params['id']
  this.additionId=id;
}
}
