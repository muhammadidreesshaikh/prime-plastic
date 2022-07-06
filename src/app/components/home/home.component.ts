import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chip: any = [];

  constructor() { }

  ngOnInit(): void {
    this.chip =[
      {
        id: 1,
        image: '../../../assets/img/icon2.png',
        name: 'Water',
      },
      {
        id: 2,
        image: '../../../assets/img/icon3.png',
        name: 'Beverage',
      },
      {
        id: 3,
        image: '../../../assets/img/icon1.png',
        name: 'Dairy',
      },
      {
        id: 4,
        image: '../../../assets/img/icon4.png',
        name: 'Food',
      },
      {
        id: 5,
        image: '../../../assets/img/icon5.png',
        name: 'Nutrition',
      },
      {
        id: 6,
        image: '../../../assets/img/icon6.png',
        name: 'Household Chemicals',
      },
      {
        id: 7,
        image: '../../../assets/img/icon7.png',
        name: 'Specialty Chemicals',
      },
      {
        id: 8,
        image: '../../../assets/img/icon8.png',
        name: 'Automotive',
      },
      {
        id: 9,
        image: '../../../assets/img/icon9.png',
        name: 'Personal Care',
      },
      {
        id: 10,
        image: '../../../assets/img/icon10.png',
        name: 'Healthcare',
      }
    ]
  }

}
