import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/models/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit, OnDestroy {
  contactList: IContact[] = [];
  contactSelected: IContact | undefined;

  // Suscripción al servicio
  subscription: Subscription | undefined;

  // Inyectamos el servicio
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Obtener la lista de contactos que brinda el service

    this.contactService
      .getContacts()
      .then((list: IContact[]) => (this.contactList = list))
      .catch((error) =>
        console.error(
          'Ha ocurrido un error al obtener la lista de contactos:' + error
        )
      )
      .finally(() => console.log('Petición finalizada'));
  }

  getContact(id: number) {
    // console.log('Obtener contacto con id: ', id);

    this.subscription = this.contactService.getContactById(id)?.subscribe((contact: IContact) => {
      this.contactSelected = contact;
    });
  }

  ngOnDestroy(): void {
    // Nos desuscribimos del observable
    this.subscription?.unsubscribe();
  }
}
