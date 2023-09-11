import { Component, OnInit } from '@angular/core';

// Tipo base para ejemplo
export type Product = {
  name: string;
  price: number;
  description: string;
};

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss'],
})
export class BasicListComponent implements OnInit {

  elementsList: Product[] = [
    {
      name: 'Milk',
      price: 1.5,
      description: 'whole milk',
    },
    {
      name: 'Bread',
      price: 1.2,
      description: 'white bread',
    },
    {
      name: 'Eggs',
      price: 2.5,
      description: '12 eggs',
    },
  ];

  loading: boolean = false;

  option: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeLoading() {
    this.loading = !this.loading;
  }

  selectOption(optionSelected: number) {
    this.option = optionSelected;
  }
}
