import { NgModule } from '@angular/core';
	import {RouterModule,Routes} from '@angular/router';
	import {AddComponent} from './department-list.component';
	import{ViewComponent} from './employee-list.component';
	
	const routes:Routes=[
	     {path:'add',component:AddComponent},
	      {path:'view',component:ViewComponent}
	]
	
	@NgModule({
	    imports: [
	        RouterModule.forRoot(routes)
	    ],
	    exports:[
	        RouterModule
	    ]
	})
	export class AppRoutingModule{}
	export const routingComponents=[AddComponent,ViewComponent]


