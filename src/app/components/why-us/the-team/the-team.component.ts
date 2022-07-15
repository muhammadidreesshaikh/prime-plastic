import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-team',
  templateUrl: './the-team.component.html',
  styleUrls: ['./the-team.component.scss']
})
export class TheTeamComponent implements OnInit {

  profile: any = [];

  constructor() { }

  ngOnInit(): void {
    this.profile =[
      {
        id: 1,
        image: '../../../../assets/img/why-us/overview5.png',
        name: 'Jabbar Shaikh',
        text: 'Chief Executive Officer',
      },
      {
        id: 2,
        image: '../../../../assets/img/why-us/team3.jpg',
        name: 'Shehryar Jabbar',
        text: 'Chief Executive Officer',
      },
      {
        id: 3,
        image: '../../../../assets/img/why-us/overview5.png',
        name: 'Jabbar Shaikh',
        text: 'Chief Executive Officer',
      },
      {
        id: 4,
        image: '../../../../assets/img/why-us/overview5.png',
        name: 'Abdul Jabbar',
        text: 'Chief Executive Officer',
      },
      {
        id: 5,
        image: '../../../../assets/img/why-us/overview5.png',
        name: 'Jabbar Shaikh',
        text: 'Chief Executive Officer',
      },
      {
        id: 6,
        image: '../../../../assets/img/why-us/overview5.png',
        name: 'Abdul Jabbar Shaikh',
        text: 'Chief Executive Officer',
      },
    ]
  }

}
