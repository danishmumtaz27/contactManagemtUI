import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { AppRouterModule } from './/app-router.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ContactserviceService } from 'src/app/contactservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent,
    CreatecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
