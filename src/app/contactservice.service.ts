import { Injectable } from '@angular/core';
import {Contact} from '../app/contact'

import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  ROOT_URL:String = `http://localhost:8080`;
  constructor(private http:HttpClient) { }

  //service to fetch all the contacts through backend api GET call
  getAllContacts():any{
    return this.http.get<any>(`${this.ROOT_URL}` + "/getAllContacts", {responseType:'json'}  );
  }

  //service to save a contact through backend api POST call
  saveContact(contact){
    return this.http.post(`${this.ROOT_URL}` + "/saveContact",contact, {responseType:'json'}  );
  }

  //service to get a single contact based on contact id passed as query param..
  getSingleContact(id){
    return this.http.get(`${this.ROOT_URL}` + "/singleContact/" + id, {responseType:'json'}  );
  }
}
