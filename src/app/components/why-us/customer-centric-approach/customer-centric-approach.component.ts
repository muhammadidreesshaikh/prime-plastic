import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-centric-approach',
  templateUrl: './customer-centric-approach.component.html',
  styleUrls: ['./customer-centric-approach.component.scss']
})
export class CustomerCentricApproachComponent implements OnInit {

  approaches: any = [];

  constructor() { }

  ngOnInit(): void {
    this.approaches = [
      {
        id: "1",
        title: "Our Network in the U.S. and Canada",
        points: [
          "We back our customer-centric promise with a network of over 60 plants in the U.S. and Canada. ",
          "While 60 is a considerable number, it represents much more than just a statistic. It speaks to our ability to ensure continuity of supply.",
          "We take a realistic approach when looking at the supply of our customers’ packaging and understand."
        ]
      },
      {
        id: "2",
        title: "Our Always Made Right® ",
        points: [
          "Make things right the first time – but if something goes wrong, do what it takes to make that right as well.",
          "Empower every employee – to speak up and take immediate action if something isn’t right.",
          "Make the necessary investment – in people, plants, and technologies to ensure everything is Always Made Right®."
        ]
      },
      {
        id: "3",
        title: "Our Passion for Innovation",
        points: [
          "We continuously challenge ourselves to create packaging that revolutionizes the industry. ",
          "Our state-of-the-art design center, Studio PKG, is a space in which customers collaborate.",
          "Our designers in order to create unique packaging solutions. This involves everything from idea into experiencing."
        ]
      },
      {
        id: "4",
        title: "Our History and Where We are Today",
        points: [
          "Our company history can be traced back over 100 years.",
          "we have become leaders in sustainability by being one of the first in the world to provide bottles made of 100% post-consumer resin (excluding colorant) and have transformed into a company.",
          "Produces over four billion rigid plastic containers annually. With the investment of Loews Corporation in 2017, we continue to develop and add to our capabilities, improve our services, "
        ]
      }
    ]
  }

}
