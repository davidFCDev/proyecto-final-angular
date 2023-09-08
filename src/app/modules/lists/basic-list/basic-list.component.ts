import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss'],
})
export class BasicListComponent implements OnInit {

  elementsList: string[] = [
    'Milk',
    'Bread',
    'Cheese',
    'Apples',
    'Bananas',
    'Pears',
    'Butter',
    'Yogurt',
    'Cereal',
    'Eggs',
  ];
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  changeLoading() {
    this.loading = !this.loading;
  }
}
