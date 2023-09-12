import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  contactList: IContact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Obtener la lista de contactos que brinda el service

    this.contactList = this.contactService.getContacts();
  }
}
