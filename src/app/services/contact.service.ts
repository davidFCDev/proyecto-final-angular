import { Injectable } from '@angular/core';
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from '../models/interfaces/contact.interface';

// Importamos observable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts(): Promise<IContact[]> {
    try {
      return Promise.resolve(CONTACTS);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getContactById(id: number): Observable<IContact> | undefined {
    //Buscamos el contacto por ID
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);

    // Creamos un observable
    let observable: Observable<IContact> = new Observable((observer) => {
      observer.next(contact);
      observer.complete();
    });

    if (contact) {
      return observable;
    } else {
      console.log('Contact not found');
      return undefined;
    }
  }
}
