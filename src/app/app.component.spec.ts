import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './restaurants/restaurants.component';

import { BrowserModule } from '@angular/platform-browser';
import {  Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'
describe('AppComponent', () => {

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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        HttpClientModule
      ],

      declarations: [
        AppComponent,
        RestaurantsComponent
        
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo-app app is running!');
  });
});
