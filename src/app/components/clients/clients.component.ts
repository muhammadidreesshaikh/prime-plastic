import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: any = [];

  constructor() { }

  ngOnInit(): void {
    this.clients =[
      {
        id: 1,
        image: 'https://sunriseplastic.com.pk/wp-content/uploads/2019/09/Syngenta.png',
      },
      {
        id: 2,
        image: 'http://stahlco.pk/wp-content/uploads/2016/06/images.png',
      },
      {
        id: 3,
        image: 'https://marcopoloevents.pk/home/wp-content/uploads/2019/11/imtiaz.png',
      },
      {
        id: 4,
        image: 'https://sunriseplastic.com.pk/wp-content/uploads/2019/09/himaliya.gif',
      },
      {
        id: 5,
        image: 'https://sunriseplastic.com.pk/wp-content/uploads/2019/09/dabur.png',
      },
      {
        id: 6,
        image: 'https://sunriseplastic.com.pk/wp-content/uploads/2019/09/client_logo_1-1.png',
      },
      {
        id: 7,
        image: 'https://www.icatch.com.pk/wp-content/uploads/2019/11/preview-tapal_tea.png',
      },
      {
        id: 8,
        image: 'https://sunriseplastic.com.pk/wp-content/uploads/2019/09/pepsi.gif',
      },
      {
        id: 9,
        image: 'https://sunriseplastic.com.pk/wp-content/uploads/2019/09/Untitled-49.jpg',
      },
      {
        id: 10,
        image: 'https://www.icatch.com.pk/wp-content/uploads/2019/11/Jashan.jpeg',
      },
      {
        id: 11,
        image: 'https://sunriseplastic.com.pk/wp-content/uploads/2019/09/ici_pak.jpg',
      }
    ]
  }

}
