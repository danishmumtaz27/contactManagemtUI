import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router'
import { ListContactComponent } from 'src/app/list-contact/list-contact.component';
import { CreatecontactComponent } from 'src/app/createcontact/createcontact.component';


const routes: Route[] = [
  {path:"",redirectTo:"listContact",pathMatch:"full"},
  {path:"listContact",component:ListContactComponent},
  {path:"createComponent",component:CreatecontactComponent}
]

@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
