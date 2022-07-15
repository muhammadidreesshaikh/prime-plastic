import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { MarketsWeServeService } from 'src/app/core/http/markets-we-serve/markets-we-serve.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: any = [];
  leftItems: any = [];
  rightItems: any = [];

  toggleButton: boolean = false;
  sidebar: boolean = false;
  sidebarNested: boolean = false;
  fadeSection: boolean = false;

  constructor(
    private service: MarketsWeServeService,
    private storage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section
    this.fadeSection = !this.fadeSection;
  }

  toggleChild() {
    this.sidebarNested = !this.sidebarNested;
  }

  getCategories() {
    this.service.getCategories().subscribe(res => {
      if (res) {
        this.categories = res;
        this.storage.store('categories', this.categories);

        if (this.categories?.length > 6) {
          const middleIndex = Math.ceil(this.categories.length / 2);
          this.leftItems = this.categories.splice(0, middleIndex);   
          this.rightItems = this.categories.splice(-middleIndex);
        } 
        else {
          this.leftItems = this.categories;
        }
      }
    })
  }

  onDetailPage(item: any) {
    this.service.onDetailPage(item);
  }

}
