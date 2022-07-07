import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chip: any = [];
  forwardThinking: any = [];

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

    this.forwardThinking =[
      {
        id: 1,
        image: '../../../assets/img/icon11.png',
        name: 'Why Us',
        text: 'The leading customer-centric packaging solutions provider that helps elevate your brand.',
        type: 'prime',
      },
      {
        id: 2,
        image: '../../../assets/img/icon12.png',
        name: 'Sustainability',
        text: 'Our sustainable solutions and practices drive value to our customers and protect the environment',
        type: 'sustainability',
      },
      {
        id: 3,
        image: '../../../assets/img/icon13.png',
        name: 'What You Get When You Partner With Us',
        text: 'From the talented designers of Studio PKG™, to our experienced manufacturing teams across the network, to our focus on environmental stewardship, Altium delivers. We pride ourselves on the partnerships we’ve forged over the past two decades and will continue to deliver for you: High performance packaging solutions. A cost-effective approach to meeting your needs. And the commitment to sustainability practices that add even more value to you and your customers.',
        type: 'partner',
      }
    ]
  }

}
