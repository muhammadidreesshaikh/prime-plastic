import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    LoaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SliderComponent
  ],
})
export class SharedModule { }
