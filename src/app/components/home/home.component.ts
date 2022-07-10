import { Component, OnInit } from '@angular/core';
import { MarketsWeServeService } from 'src/app/core/http/markets-we-serve/markets-we-serve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chips: any = [];
  forwardThinking: any = [];

  constructor(
    private marketsWeServeService: MarketsWeServeService
  ) { }

  ngOnInit(): void {
    this.getCategoriesSynced();

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

  getCategoriesSynced() {
    this.marketsWeServeService.getCategories().subscribe(res => {
      this.chips = res;
    });

    this.marketsWeServeService.getCategoriesFromSession().subscribe(res => {
      this.chips = res;
    });
  }

  onDetailPage(item: any) {
    this.marketsWeServeService.onDetailPage(item);
  }

}
