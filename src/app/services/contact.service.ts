import { Injectable } from '@angular/core';
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from '../models/interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts(): Promise<IContact[]> {
    try {
      return Promise.resolve(CONTACTS);
    }
    catch (error) {
      return Promise.reject(error);
    }
  }

  getContactById(id: number): Promise<IContact> | undefined {
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);

    if (contact) {
      return Promise.resolve(contact);
    } else {
      console.log('Contact not found');
      return undefined;
    }
  }

}
