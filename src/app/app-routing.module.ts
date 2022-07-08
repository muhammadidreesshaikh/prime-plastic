import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'product-catalog',
    loadChildren: () => import('./components/product-catalog/product-catalog.module').then(m => m.ProductCatalogModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./components/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'markets-serve',
    loadChildren: () => import('./components/markets-serve/markets-serve.module').then(m => m.MarketsServeModule)
  },
  {
    path: 'why-us',
    loadChildren: () => import('./components/why-us/why-us.module').then(m => m.WhyUsModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
