import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import {HttpClientModule} from '@angular/common/http';

import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('ResturantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [HttpClientModule]
    });
    
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call service api', () => {
    const url = 'https://random-data-api.com/api/restaurant/random_restaurant';
    expect(service.getResturants(url)).toBeTruthy();
  });
});
