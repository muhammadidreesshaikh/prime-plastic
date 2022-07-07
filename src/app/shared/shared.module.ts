import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SliderComponent } from './slider/slider.component';
import { ContactFixedAreaComponent } from './contact-fixed-area/contact-fixed-area.component';



@NgModule({
  declarations: [
    LoaderComponent,
    SliderComponent,
    ContactFixedAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SliderComponent,
    ContactFixedAreaComponent
  ],
})
export class SharedModule { }
