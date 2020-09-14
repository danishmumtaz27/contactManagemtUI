import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from 'src/app/contactservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  constructor(private contactService: ContactserviceService, private router: Router) { }

  ngOnInit() {
  }

  saveContact(contactForm){
    console.log(contactForm);
    this.contactService.saveContact(contactForm).subscribe(data => {
      this.router.navigate(["listContact"])
    })
  }

  getResult(number){
    if(number < 0)
     return 0;
    else {
      return number
    }
  }
}
