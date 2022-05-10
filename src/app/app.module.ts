import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import {  Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shops', pathMatch: 'full' 
  },
  {
    path: 'shops',
    component: RestaurantsComponent, 
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
