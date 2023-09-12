import { Injectable } from '@angular/core';
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from '../models/interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts(): IContact[] {
    return CONTACTS;
  }

  getContactById(id: number): IContact | undefined {
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);

    if (contact) {
      return contact;
    } else {
      console.log('Contact not found');
    }
  }
}
