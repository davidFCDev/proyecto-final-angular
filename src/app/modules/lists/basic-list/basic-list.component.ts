import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss'],
})
export class BasicListComponent implements OnInit {
  
  loading: boolean = false;
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

  constructor() {}

  ngOnInit(): void {}
}
