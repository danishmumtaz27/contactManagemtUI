import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from 'src/app/contactservice.service';
import { Contact } from 'src/app/contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contactList : Contact[] = [];
  constructor(private contactService: ContactserviceService, private router:Router) { }

  ngOnInit() {
    this.contactService.getAllContacts().subscribe(data => {
    console.log(data);
      this.contactList = data;
  }
    , err => console.error(err));
  }

  viewContact(id){
    this.router.navigate(["createContact"]);
  }

}
